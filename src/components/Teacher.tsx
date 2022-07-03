import React, { memo } from "react";
import { styled, css } from "../../stitches.config";
import * as Avatar from "@radix-ui/react-avatar";
import { motion } from "framer-motion";

interface TeacherProps {
  name: string;
  avatar: string;
  bio: string;
}

const Container = styled(motion.div, {
  display: "flex",
  alignItems: "center",
  padding: "0 $6",
  gap: "$3",
});

const AvatarContainer = styled(Avatar.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 63,
  height: 63,
  borderRadius: "100%",
  backgroundColor: "$gray600",
});

const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const AvatarFallback = styled(Avatar.AvatarFallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "$green300",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const BioContainer = styled("div", {});

const Name = styled("h2", {
  fontWeight: "bold",
  fontSize: 24,
  color: "white",
  margin: "$1 0",
});
const Bio = styled("h3", {
  fontWeight: "bold",
  fontSize: 14,
  color: "$gray200",
  margin: "$1 0",
});

export const Teacher = memo((props: TeacherProps) => {
  const { name, avatar, bio } = props;
  return (
    <Container
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <AvatarContainer>
        <AvatarImage src={avatar} alt={`Avatar do professor ${name}`} />
        <AvatarFallback delayMs={600}>{name[0]}</AvatarFallback>
      </AvatarContainer>
      <BioContainer>
        <Name>{name}</Name>
        <Bio>{bio}</Bio>
      </BioContainer>
    </Container>
  );
});
