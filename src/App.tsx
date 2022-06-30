import { styled } from "./../stitches.config";
import { gql, useQuery } from "@apollo/client";
import { client } from "lib/apollo";
import { useEffect } from "react";
import { Header } from "root/components/Header";
import { Button } from "./components/Button";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

const Container = styled("div", {
  display: "flex",
  w: "100%",
  minHeight: "100vh",
  fd: "column",
});

const Main = styled("main", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: "1",
  backgroundColor: "$gray900",
});

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
