import { styled } from "./../stitches.config";
import { motion } from "framer-motion";
import { gql, useQuery } from "@apollo/client";
import { client } from "lib/apollo";
import { Header } from "./components/Header";
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

const Title = styled(motion.h1, {
  color: "$red500",
  fontSize: "$6",
  fontWeight: "bold",
});

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);
  return (
    <Container>
      <Header />
      <Main>
        <Title
          initial={{
            opacity: 0,
            scale: 0,
            y: 1000,
          }}
          animate={{
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          In development
        </Title>
      </Main>
    </Container>
  );
}

export default App;
