import React, { memo } from "react";
import { css, styled } from "../../../stitches.config";
import { motion } from "framer-motion";
import { LockClosedIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  isActive?: boolean;
  type: "live" | "class";
}

const Box = styled("div", {});

const CardContainer = styled(motion.div, {
  position: "relative",
  width: "100%",
  height: 133,
  display: "flex",
  backgroundColor: "transparent",
  border: "none",
  flexDirection: "column",
  ai: "center",
  gap: "$1",
});

const Date = styled("div", {
  width: "100%",
  display: "flex",
  gap: "$4",
  span: {
    color: "$gray300",
  },
});

const Card = styled("button", {
  display: "flex",
  fd: "column",
  ai: "center",
  gap: "$2",
  padding: "$3",
  width: "100%",
  flex: 1,
  borderRadius: "$2",
  backgroundColor: "transparent",
  border: "1px solid $gray500",
  transition: "border 300ms",
  cursor: "pointer",
  outline: "none !important",
  "&:hover": {
    borderColor: "$green300",
  },
  "&:focus": {
    borderColor: "$green300",
  },
  variants: {
    variant: {
      selected: {
        cursor: "not-allowed",
        backgroundColor: "$green300",
        borderColor: "$green300",
      },
    },
  },
});

const customIconStyles = css({
  size: "$4",
  variants: {
    variant: {
      locked: {},
      released: {
        color: "$blue500",
      },
      selected: {
        color: "white",
      },
    },
  },
});

const LockedIcon = styled(LockClosedIcon, {
  size: "$4",
  color: "$yellow500",
});

const ReleasedIcon = styled(CheckCircledIcon, {
  ...customIconStyles,
});

const CardHeaderIcon: React.FC<{
  isLessonAvailable: boolean;
  css: any;
}> = ({ isLessonAvailable, css }) => {
  if (!isLessonAvailable) return <LockedIcon css={css} />;
  return <ReleasedIcon css={css} />;
};

const CardHeader = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const CardBody = styled("div", {
  width: "100%",
  fontWeight: "bold",
  fontSize: 16,
  color: "white",
  display: "flex",
  justifyContent: "flex-start",
});

const LessonType = styled("div", {
  padding: "1px 5px",
  border: "1.4px solid $green300",
  borderRadius: "$1",
  color: "$green300",
  fontWeight: "bold",
  variants: {
    variant: {
      selected: {
        border: "1.4px solid white",
        color: "white",
      },
    },
  },
});

const Lesson: React.FC<LessonProps> = ({ ...props }) => {
  const { isActive, type, availableAt, slug, title } = props;
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE ' • ' dd' de 'MMMM' • 'h'h'mm'",
    {
      locale: ptBR,
    }
  );
  return (
    <CardContainer
      initial={{
        opacity: 0,
        y: 200,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: false }}
    >
      <Date>
        <span>{availableDateFormatted}</span>
      </Date>
      <Card
        variant={isActive && "selected"}
        css={
          !isLessonAvailable && {
            cursor: "not-allowed",
          }
        }
      >
        <CardHeader>
          <Box
            css={{
              display: "flex",
              gap: "$2",
            }}
          >
            <CardHeaderIcon
              isLessonAvailable={isLessonAvailable ?? true}
              css={{
                color: `${
                  isActive
                    ? "white"
                    : isLessonAvailable
                    ? "$blue500"
                    : "$yellow500"
                }`,
              }}
            />
            <Box
              css={{
                fontSize: 14,
                fontWeight: "bold",
                color: `${
                  isActive
                    ? "white"
                    : isLessonAvailable
                    ? "$blue500"
                    : "$yellow500"
                }`,
              }}
            >
              {isLessonAvailable ? "Conteúdo liberado" : "Em breve"}
            </Box>
          </Box>
          <Box>
            <LessonType variant={isActive && "selected"}>
              {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </LessonType>
          </Box>
        </CardHeader>
        <CardBody>
          <Box>Abertura do Ignite labs</Box>
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default memo(Lesson);
