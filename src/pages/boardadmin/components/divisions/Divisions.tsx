import { useTranslation } from "react-i18next";

import { Division } from "./components";

interface IProps {
  divisionsState: "board-options" | "players" | "admin-options";
  setDivisionsState: (
    value: "board-options" | "players" | "admin-options",
  ) => void;
  adminKey: string;
}

export default function Divisions({
  divisionsState,
  adminKey,
  setDivisionsState,
}: IProps) {
  const { t } = useTranslation();

  return (
    <>
      <Division
        adminKey={adminKey}
        active={divisionsState === "board-options"}
        name="board-options"
        setDivisionsState={setDivisionsState}
      >
        {t("app.boardadmin.board-data.division.board-options")}
      </Division>
      <Division
        adminKey={adminKey}
        active={divisionsState === "players"}
        name="players"
        setDivisionsState={setDivisionsState}
      >
        {t("app.boardadmin.board-data.division.players")}
      </Division>
      <Division
        adminKey={adminKey}
        active={divisionsState === "admin-options"}
        name="admin-options"
        setDivisionsState={setDivisionsState}
      >
        {t("app.boardadmin.board-data.admin-options")}
      </Division>
      
      <div className="c-9 h-[1.5px] my-3 bg-gray-100 rounded-full"></div>

      <Division
        adminKey={adminKey}
        active={false}
        name="visit"
        setDivisionsState={setDivisionsState}
      >
        {t("app.boardadmin.visit")}
      </Division>
    </>
  );
}
