import * as React from "react";
import { axiosIns } from "./../utils";

interface FetchDataProps {
  user_key: string | undefined;
}

interface Data {
  title: string;
  description: string | undefined;
  unit: string | undefined;
  players:
    | [
        {
          name: string | undefined;
          score: number;
        },
      ]
    | undefined;
}

export default function useBoardData() {
  const [boardData, setBoardData] = React.useState<Data>();

  const fetchData = async ({ user_key }: FetchDataProps): Promise<void> => {
    const res = await axiosIns.get("/board", {
      params: {
        user_key,
      },
    });
    setBoardData(res.data);
  };

  return { fetchData, boardData };
}
