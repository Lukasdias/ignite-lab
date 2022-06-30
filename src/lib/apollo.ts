import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl509e98w0yi401ugb8m1f0pz/master",
  cache: new InMemoryCache(),
});
