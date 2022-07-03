import React from "react";
import { Header } from "components/Header";
import Lesson from "components/Sidebar/Lesson";
import { styled } from "../../stitches.config";
import { Sidebar } from "../components/Sidebar/Sidebar";

const Main = styled("main", {
  position: "relative",
  display: "flex",
  fd: "column",
  ai: "end",
  jc: "center",
  backgroundColor: "black",
  flex: 1,
});

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
      </Main>
    </>
  );
};
