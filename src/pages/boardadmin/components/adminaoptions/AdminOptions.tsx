import * as React from "react";

import { BoardId, Email } from "./components";
import { axiosIns } from "./../../../../utils";

interface IProps {
  adminKey: string;
}

interface Data {
  board_username: string;
  email: string;
}

export default function AdminOptions({ adminKey }: IProps) {
  const [data, setData] = React.useState<Data>();

  React.useEffect(() => {
    axiosIns
      .get("/boardadminoption", {
        params: {
          adminKey,
        },
      })
      .then(res => {
        setData(res.data);
      });
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Email adminKey={adminKey} email={data?.email} />
      <BoardId adminKey={adminKey} username={data?.board_username} />
    </>
  );
}
