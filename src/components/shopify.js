import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'bacalahshop.myshopify.com',
  storefrontAccessToken: '981ecb8da5a55216f463b62e9833b806'
});

export default client;