import React from "react";
import { Header } from "components/Header";
import Class from "components/Class";
import { styled } from "../../stitches.config";
import { Sidebar } from "../components/Sidebar/Sidebar";

const Main = styled("main", {
  position: "relative",
  display: "flex",
  backgroundColor: "black",
  width: "100%",
  minHeight: 0,
});

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Class />
        <Sidebar />
      </Main>
    </>
  );
};
