import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'gatsby-sanity-cms.myshopify.com',
  storefrontAccessToken: '01fc43ebbb67c57dc9e6055fec47f112'
});

export default client;