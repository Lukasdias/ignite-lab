import { memo } from "react";
import { styled, css } from "../../stitches.config";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Teacher } from "./Teacher";
import { Extras } from "./Extras";
import { ClassFooter } from "./ClassFooter";

const Container = styled(motion.div, {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  overflowY: "scroll",
});

const Content = styled("div", {
  position: "relative",
  bg: "black",
  display: "flex",
  justifyContent: "center",
});

const VideoAspectRatio = styled("div", {
  position: "relative",
  flex: 1,
  minHeight: "30vh",
  background: "$gray600",
  "@bp1": {
    minHeight: "40vh",
  },
  "@bp2": {
    minHeight: "60vh",
  },
});

const VideoDescriptionContainer = styled("div", {
  position: "relative",
  display: "flex",
  fd: "column",
  justifyContent: "flex-start",
  padding: "$6",
  marginInline: "auto",
  "@bp1": {
    fd: "row",
  },
});

const VideoTitleContainer = styled("div", {
  flex: 1.3,
  alignItems: "start",
  gap: "$6",
});

const VideoTitle = styled("h1", {
  fontWeight: "bold",
  color: "white",
  fontSize: 18,
  "@bp1": {
    fontSize: 24,
  },
});

const VideoDescription = styled("p", {
  color: "$gray200",
  marginTop: "$3",
  fontSize: 12,
  "@bp1": {
    fontSize: 14,
  },
});

const VideoButtonsContainer = styled("div", {
  padding: "$3",
  display: "flex",
  fd: "column",
  justifyContent: "center",
  gap: "$2",
});

const Class: React.FC = () => {
  return (
    <Container initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
      <Content>
        <VideoAspectRatio></VideoAspectRatio>
      </Content>
      <VideoDescriptionContainer>
        <VideoTitleContainer>
          <VideoTitle>
            Aula 01 - Criando o projeto e realizando o setup inicial
          </VideoTitle>
          <VideoDescription>
            Nessa aula vamos dar início ao projeto criando a estrutura base da
            aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
            realizar o setup do nosso projeto no GraphCMS criando as entidades
            da aplicação e integrando a API GraphQL gerada pela plataforma no
            nosso front-end utilizando Apollo Client.
          </VideoDescription>
          <Teacher
            avatar={
              "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            }
            bio="Co-fundador e CTO na Rocketseat"
            name="Colm Tuite"
          />
        </VideoTitleContainer>
        <VideoButtonsContainer>
          <Button variant={"fill"}>Comunidade no discord</Button>
          <Button variant={"outline"}>Acesse o desafio</Button>
        </VideoButtonsContainer>
      </VideoDescriptionContainer>
      <Extras />
      <ClassFooter />
    </Container>
  );
};

export default memo(Class);
