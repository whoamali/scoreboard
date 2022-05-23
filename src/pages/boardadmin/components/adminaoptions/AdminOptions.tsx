import * as React from "react";

import { BoardId, Email, CreateAt } from "./components";
import { axiosIns } from "./../../../../utils";

interface IProps {
  adminKey: string;
}

interface Data {
  user_key: string;
  email: string | null;
  create_date: string;
}

export default function AdminOptions({ adminKey }: IProps) {
  const [data, setData] = React.useState<Data>();

  React.useEffect(() => {
    axiosIns
      .get("/admin/get/admin_options", {
        params: {
          admin_key: adminKey,
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
      <BoardId adminKey={adminKey} username={data?.user_key} />
      <CreateAt date={data?.create_date} />
    </>
  );
}
