import * as React from "react";

import { axiosIns } from "../../../utils";
import { Divisions } from "./divisions";
import { BoardOptions } from "./boardoptions";
import { Players } from "./players";

interface IProps {
  adminKey: string;
}

export default function BoardData({ adminKey }: IProps) {
  const [divisionsState, setDivisionsState] = React.useState<
    "board-options" | "players" | "admin-options"
  >("board-options");

  const handleDivisionsState = (
    value: "board-options" | "players" | "admin-options",
  ): void => {
    setDivisionsState(value);
  };

  return (
    <section className="w-2/3 mx-auto flex justify-start items-start pt-5">
      <div className="flex flex-col mr-3">
        <Divisions
          divisionsState={divisionsState}
          setDivisionsState={handleDivisionsState}
        />
      </div>
      <div className="ml-3 w-[600px]">
        {divisionsState === "board-options" && <BoardOptions adminKey={adminKey} />}
        {divisionsState === "players" && <Players adminKey={adminKey} />}
      </div>
    </section>
  );
}
