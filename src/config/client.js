import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://icaapidev.mentalhealthfirstaid.org/", // Replace with your GraphQL API endpoint
  // uri: "http://192.168.158.128:4000/", // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;
