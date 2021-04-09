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

  console.log(data);

  if (data.hasOwnProperty("title") && data.hasOwnProperty("handle")) {
    const collection = {
      _type: "collection",
      _id: data.id.toString(),
      collectionId: data.id,
      title: data.title,
      handle: data.handle
    };

    return client
      .transaction()
      .createIfNotExists(collection)
      .patch(data.id.toString(), (patch) => patch.set(collection))
      .commit()
      .then((res) => {
        console.log(
          `Successfully updated/patched Collection ${data.id} in Sanity`
        );
        return {
          statusCode: 200,
          body: JSON.stringify(res),
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
  } else if (
    data.hasOwnProperty("id") &&
    !data.hasOwnProperty("title") &&
    !data.hasOwnProperty("handle")
  ) {
    // this is triggered if Shopify sends a Collection Deletion webhook that does NOT contain anything besides an ID

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
    // tread carefully here: you might not want to do this if you have Collection associated anywhere else such as "related collection" or any other schemas.
    // this will likely cause in your schemas breaking
    return client
      .delete({
        query: `*[_type == "collection" && collectionId == ${data.id}]`,
      })
      .then((res) => {
        console.log(`Successfully deleted collection ${data.id}`);
      })
      .catch((err) => {
        console.error("Delete failed: ", err.message);
      });
  }
};
