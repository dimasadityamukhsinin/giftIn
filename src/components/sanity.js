const sanityClient = require("@sanity/client");

const { SANITY_API_TOKEN, SANITY_PROJECT_ID, SANITY_DATASET } = process.env;

const sanity = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_API_TOKEN,
  useCdn: true,
});

export default sanity;