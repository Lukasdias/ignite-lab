import { ApolloProvider } from "@apollo/client";
import "@fontsource/roboto";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { client } from "./lib/apollo";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
