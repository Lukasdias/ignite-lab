import React, { useCallback, useMemo, ReactPortal } from "react";
import { styled } from "../../../stitches.config";
import { motion } from "framer-motion";
import { gql, useQuery } from "@apollo/client";
import Lesson from "./Lesson";

const Box = styled("div", {});

const Container = styled(motion.aside, {
  position: "absolute",
  top: 0,
  width: "100vw",
  height: "100vh",
  overflowX: "hidden",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "$gray700",
  "@bp1": {
    position: "relative",
    width: 348,
  },
});

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: id_ASC, stage: PUBLISHED) {
      availableAt
      id
      lessonType
      slug
      title
    }
  }
`;

interface GetLessonsResponse {
  lessons: {
    id: string;
    slug: string;
    title: string;
    lessonType: "live" | "class";
    availableAt: string;
  }[];
}

export const Sidebar: React.FC = () => {
  const { data } = useQuery<GetLessonsResponse>(GET_LESSONS_QUERY);
  return (
    <Container>
      <Box
        as="h1"
        css={{
          fontSize: 24,
          color: "white",
          padding: "$1 0",
          borderBottom: "1px solid $gray500",
        }}
      >
        Cronograma das aulas
      </Box>
      <Box
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "$3",
          gap: "$3",
        }}
      >
        {data?.lessons.map((lesson, idx: number) => (
          <Lesson
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
            title={lesson.title}
            key={lesson.id}
            // isActive={idx === 0}
            isLessonAvailable={true}
            type={lesson.lessonType}
          />
        ))}
      </Box>
    </Container>
  );
};
