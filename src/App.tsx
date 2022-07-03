import { styled } from "./../stitches.config";
import { motion } from "framer-motion";
import Routes from "./routes";

const Container = styled("div", {
  display: "flex",
  fd: "column",
  w: "100%",
  minHeight: "100vh",
  "@bp1": {
    maxHeight: "100vh",
    overflow: "hidden",
  },
});

function App() {
  return (
    <Container>
      <Routes />
    </Container>
  );
}

export default App;
