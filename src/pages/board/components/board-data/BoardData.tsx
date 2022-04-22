import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { BoardTitle, BoardDescription, BoardPlayers } from "./components";
import { Alert } from "./../../../../components";

interface IProps {
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

export default function BoardData({
  title,
  description,
  unit,
  players,
}: IProps) {
  const [showAlert, setAlert] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-start w-full h-[100vh]">
      <Alert
        message={
          <a href="/createboard">
            {t("app.board.board-data.alert.create-message")}
          </a>
        }
        show={showAlert}
        type="info"
      />
      <BoardTitle title={title} />
      <BoardDescription description={description} />
      <BoardPlayers players={players} unit={unit} />
    </section>
  );
}
