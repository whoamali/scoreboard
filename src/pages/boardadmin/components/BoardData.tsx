import * as React from "react";

import { axiosIns } from "./../../../utils";
import { Alert } from "./../../../components";
import { Divisions } from "./divisions";
import { BoardOptions } from "./boardoptions";
import { Players } from "./players";
import { AdminOptions } from "./adminaoptions";

interface IProps {
  adminKey: string;
}

export default function BoardData({ adminKey }: IProps) {
  const [emailEmpty, setEmailEmpty] = React.useState<boolean>(false);
  const [divisionsState, setDivisionsState] = React.useState<
    "board-options" | "players" | "admin-options"
  >("board-options");

  React.useEffect(() => {
    axiosIns.get(`/admin/get/admin_options/${adminKey}`).then(res => {
      if (divisionsState !== "admin-options") {
        setTimeout(() => {
          setEmailEmpty(res.data.data.email === null);
        }, 1500);
      }
    });
  }, []);

  const handleDivisionsState = (
    value: "board-options" | "players" | "admin-options",
  ): void => {
    setDivisionsState(value);
  };

  return (
    <>
      <Alert
        position="right"
        type="info"
        show={emailEmpty}
        message={
          <a
            onClick={() => {
              handleDivisionsState("admin-options");
              setEmailEmpty(false);
            }}
            className="cursor-pointer"
          >
            {"You can enter your email to save your adminkey! click here..."}
          </a>
        }
      />
      <section className="w-2/3 mx-auto flex justify-start items-start pt-5">
        <div className="flex flex-col mr-3">
          <Divisions
            divisionsState={divisionsState}
            setDivisionsState={handleDivisionsState}
          />
        </div>
        <div className="ml-3 w-[600px] relative">
          {divisionsState === "board-options" && (
            <BoardOptions adminKey={adminKey} />
          )}
          {divisionsState === "players" && <Players adminKey={adminKey} />}
          {divisionsState === "admin-options" && (
            <AdminOptions adminKey={adminKey} />
          )}
        </div>
      </section>
    </>
  );
}
