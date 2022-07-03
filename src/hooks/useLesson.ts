import create from "zustand";
import { gql, useQuery } from "@apollo/client";

interface LessonsQuery {
  getLessons: () => void;
}

export const useLessons = create<LessonsQuery>((set, get) => ({
  getLessons: async () => {
    const myQuery = gql`
      query MyQuery {
        lessons(orderBy: id_ASC, stage: PUBLISHED) {
          availableAt
          id
          lessonType
          slug
          title
        }
      }
    `;
    const { data } = useQuery(myQuery);
    console.log(data);
  },
}));
