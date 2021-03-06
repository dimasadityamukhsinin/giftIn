const sanityClient = require("@sanity/client");

const { SANITY_API_TOKEN, SANITY_PROJECT_ID, SANITY_DATASET } = process.env;

const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_API_TOKEN,
  useCdn: true,
});

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST" || !event.body) {
    return {
      statusCode: 400,
      body: "",
    };
  }

  let data;

  try {
    data = JSON.parse(event.body);
  } catch (error) {
    console.error("JSON parsing error:", error);

    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Bad request body",
      }),
    };
  }

  console.log(data)

  // Shopify sends both Product Updates/Creations AND deletions as POST requests
  // Product Updates & Creations contain the entire product body, including titles, tags, images, handle, etc.
  // Product Deletions only contain a singular 'id'
  if (data.hasOwnProperty("title") && data.hasOwnProperty("handle")) {
    // Build our initial product
    const product = {
      _type: "product",
      _id: data.id.toString(),
      productId: data.id,
      variantId: data.variants[0].id,
      title: data.title,
      price: data.variants[0].price,
      sku: data.variants[0].sku,
      weight: data.variants[0].weight,
      productType: data.product_type,
      slug: {
        _type: "slug",
        current: data.handle,
      },
    };

    return client
      .transaction()
      .createIfNotExists(product)
      .patch(data.id.toString(), (patch) => patch.set(product))
      .commit()
      .then((res) => {
        console.log(
          `Successfully updated/patched Product ${data.id} in Sanity`
        );

        const productVariantFields = data.variants.map((variant) => ({
          productId: data.id,
          variantId: variant.id,
          productTitle: data.title,
          variantTitle: variant.title,
          sku: variant.sku,
          price: variant.price,
        }));

        // Define productVariant documents
        const productVariants = data.variants
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((variant) => ({
            _type: "productVariant",
            _id: variant.id.toString(),
          }));

        // create variant if doesn't exist & patch (update) variant with core shopify data
        productVariants.forEach((variant, i) => {
          client
            .transaction()
            .createIfNotExists(variant)
            .patch(variant._id, (patch) => patch.set(productVariantFields[i]))
            .patch(variant._id, (patch) =>
              patch.setIfMissing({
                title: productVariantFields[i].variantTitle,
              })
            );
        });

        // grab current variants
        client
          .fetch(
            `*[_type == "productVariant" && productId == ${data.id}]{
            _id
          }`
          )
          .then((currentVariants) => {
            // mark deleted variants
            currentVariants.forEach((cv) => {
              const active = productVariants.some((v) => v._id === cv._id);
              if (!active) {
                return client
                  .delete(cv._id.toString())
                  .then((res) => {
                    console.log(`Successfully deleted variant ${data.id}`);
                  })
                  .catch((err) => {
                    console.error("Delete failed: ", err.message);
                  });
              }
            });
          });

        hasVariantsToSync = true;
        if (data.variants[0].title !== "Default Title") {
          return Promise.all(
            data.variants.map((variant) => {
              const variantData = {
                _type: "productVariant",
                _id: variant.id.toString(),
                productId: data.id,
                variantId: variant.id,
                productTitle: data.title,
                variantTitle: variant.title,
                sku: variant.sku,
                price: variant.price,
              };

              return client
                .transaction()
                .createIfNotExists(variantData)
                .patch(variant.id.toString(), (patch) => patch.set(variantData))
                .commit()
                .then((response) => {
                  console.log(
                    `Successfully updated/patched Variant ${variant.id} in Sanity`
                  );
                  return response;
                })
                .catch((error) => {
                  console.error("Sanity error:", error);
                  return error;
                });
            })
          )
            .then((result) => {
              return {
                statusCode: 200,
                body: JSON.stringify(result),
              };
            })
            .catch((error) => {
              console.error("Sanity error:", error);

              return {
                statusCode: 500,
                body: JSON.stringify({
                  error: "An internal server error has occurred",
                }),
              };
            });
        } else {
          return client
            .delete({
              query: `*[_type == "productVariant" && productId == ${data.id}]`,
            })
            .then((res) => {
              console.log(
                `Successfully deleted variant ${data.id}`
              );
              return res;
            })
            .catch((err) => {
              console.error("Delete failed: ", err.message);
            });
        }
      })
      .catch((error) => {
        console.error("Sanity error:", error);

        return {
          statusCode: 500,
          body: JSON.stringify({
            error: "An internal server error has occurred",
          }),
        };
      });
  } else if (
    data.hasOwnProperty("id") &&
    !data.hasOwnProperty("title") &&
    !data.hasOwnProperty("handle")
  ) {
    // this is triggered if Shopify sends a Product Deletion webhook that does NOT contain anything besides an ID

    // sets the "deleted" boolean to true
    // you could likely use this value in Gatsby to decide whether to render the item or not

    // tread carefully:
    // return client
    //   .patch(data.id.toString())
    //   .set({ deleted: true })
    //   .commit()
    //   .then((deletedObject) => {
    //     console.log(`successfully marked ${data.id} as 'deleted'`);
    //   })
    //   .catch((error) => {
    //     console.error(`Sanity error:`, error);
    //   });

    // *~* OR *~*

    // DELETE FROM SANITY
    // tread carefully here: you might not want to do this if you have products associated anywhere else such as "related products" or any other schemas.
    // this will likely cause in your schemas breaking
      return client
        .delete({
          query: `*[_type == "product" && productId == ${data.id}]`,
        })
        .then(res => {
          console.log(`Successfully deleted product ${data.id}`)
        })
        .catch(err => {
          console.error('Delete failed: ', err.message)
        })
  }
};
