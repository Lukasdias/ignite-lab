import React from "react";
import { styled, css } from "../../stitches.config";
import FooterLogoURL from "assets/rocketseat-logo.svg";

const Container = styled("footer", {
  width: "100%",
  padding: "$3 $8",
  "@bp1": {
    padding: "$3 $6",
  },
});

const Content = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderTop: "1.4px solid",
  borderColor: "$gray500",
  gap: "$3",
  padding: "$3",
  "@bp1": {
    fd: "row",
  },
});

const FooterLogo = styled("img", {
  width: 162,
  height: 30.38,
});

const FooterText = styled("span", {
  fontSize: 14,
  color: "$gray500",
});

export const ClassFooter: React.FC = () => {
  return (
    <Container>
      <Content>
        <FooterLogo src={FooterLogoURL} alt="Rocketseat Logo" />
        <FooterText>Rocketseat - Todos os direitos reservados</FooterText>
        <FooterText
          css={{
            "@bp1": {
              marginLeft: "auto",
            },
          }}
        >
          Políticas de privacidade
        </FooterText>
      </Content>
    </Container>
  );
};
