import { useTranslation } from "react-i18next";

import { Division } from "./components";

interface IProps {
  divisionsState: "board-options" | "players" | "admin-options";
  setDivisionsState: (
    value: "board-options" | "players" | "admin-options",
  ) => void;
}

export default function Divisions({
  divisionsState,
  setDivisionsState,
}: IProps) {
  const { t } = useTranslation();

  return (
    <>
      <Division
        active={divisionsState === "board-options"}
        name="board-options"
        setDivisionsState={setDivisionsState}
      >
        {t("app.boardadmin.board-data.division.board-options")}
      </Division>
      <Division
        active={divisionsState === "players"}
        name="players"
        setDivisionsState={setDivisionsState}
      >
        {t("app.boardadmin.board-data.division.players")}
      </Division>
      <Division
        active={divisionsState === "admin-options"}
        name="admin-options"
        setDivisionsState={setDivisionsState}
      >
        {t("app.boardadmin.board-data.admin-options")}
      </Division>
    </>
  );
}
