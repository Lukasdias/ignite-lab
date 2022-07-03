import { motion } from "framer-motion";
import { styled, css } from "./../../stitches.config";
import { DownloadIcon, ImageIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const Container = styled(motion.div, {
  marginTop: "$6",
  display: "flex",
  fd: "column",
  justifyContent: "center",
  gap: "$4",
  padding: "$6",
  "@bp1": {
    fd: "row",
  },
});

const ExtraCard = styled("div", {
  flex: 1,
  minHeight: 134,
  borderRadius: "$4",
  display: "flex",
  backgroundColor: "$gray600",
});

const IconContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$green700",
  flex: 1,
  padding: "0 $6",
});

const CardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 6,
  padding: "$3 $5",
});

const CardTitle = styled("h4", {
  fontWeight: "bold",
  fontSize: 18,
  "@bp1": {
    fontSize: 24,
  },
  margin: "3px 0",
  color: "white",
});

const CardDescription = styled("p", {
  fontSize: 12,
  "@bp1": {
    fontSize: 14,
  },
  margin: "3px 0",
  color: "white",
});

const ArrowContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const ArrowIcon = styled(ArrowRightIcon, {
  size: 24,
  color: "$blue500",
  cursor: "pointer",
  transition: "all 300ms",
  "&:hover": {
    color: "$green300",
  },
});

const ComplementaryIcon = styled(DownloadIcon, {
  color: "white",
  size: 39,
});

const WallpaperIcon = styled(ImageIcon, {
  color: "white",
  size: 39,
});

export const Extras = () => {
  return (
    <Container>
      <ExtraCard>
        <IconContainer>
          <ComplementaryIcon />
        </IconContainer>
        <CardContent>
          <CardTitle>Material complementar</CardTitle>
          <CardDescription>
            Acesse o material complementar para acelerar o seu desenvolvimento
          </CardDescription>
        </CardContent>
        <ArrowContainer>
          <ArrowIcon />
        </ArrowContainer>
      </ExtraCard>
      <ExtraCard>
        <IconContainer>
          <WallpaperIcon />
        </IconContainer>
        <CardContent>
          <CardTitle>Wallpapers exclusivos</CardTitle>
          <CardDescription>
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
            máquina
          </CardDescription>
        </CardContent>
        <ArrowContainer>
          <ArrowIcon />
        </ArrowContainer>
      </ExtraCard>
    </Container>
  );
};
