import * as React from "react";
import { useTranslation } from "react-i18next";

import { BoardPlayersRow } from "./components";

interface IProps {
  players:
    | [
        {
          player_id: number;
          name: string | undefined | null;
          score: number;
        },
      ]
    | undefined;
  unit: string | undefined;
}

export default function BoardPlayers({ players, unit }: IProps) {
  const [search, setSearch] = React.useState<string>("");
  const [order, setOrder] = React.useState<"most" | "least" | undefined>(
    undefined,
  );
  const { t } = useTranslation();

  const filteredPlayers = players
    ?.sort((a, b) => {
      if (order == undefined) return 1;
      else if (order == "most") {
        if (a.score > b.score) return -1;
        if (a.score < b.score) return 1;
        return 0;
      }
      return a.score - b.score;
    })
    ?.filter(e => {
      return e.name?.toLowerCase()?.replace(/\s/g, "")?.includes(search);
    })
    ?.map((e, index) => {
      return (
        <BoardPlayersRow
          key={`${index}${e.name}${e.player_id}`}
          index={index}
          player={e}
          unit={unit}
        />
      );
    });

  return (
    <div className="w-[800px] h-[550px] overflow-y-auto overflow-x-hidden p-5 pt-0 rounded bg-gray-50">
      <div className="sticky top-0 py-4">
        <input
          className="w-[480px] h-[50px] ml-9 p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
          type="text"
          placeholder={"find the player..."}
          onChange={e =>
            setSearch(e.target.value.toLowerCase().replace(/\s/g, ""))
          }
        />
        <select
          className="w-[170px] h-[50px] ml-7 bg-white p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
          value={order}
          onChange={e => {
            setOrder(
              e.target.value === "most"
                ? "most"
                : e.target.value === "least"
                ? "least"
                : undefined,
            );
          }}
        >
          <option value="order">{t("app.board.board-player.order")}</option>
          <option value="most">{t("app.board.board-player.order.most")}</option>
          <option value="least">
            {t("app.board.board-player.order.least")}
          </option>
        </select>
      </div>

      <div className="flex">
        <div className="text-center font-medium font-Fredoka text-base w-[50px]">
          #
        </div>
        <div className="text-left capitalize font-medium font-Fredoka text-xl w-[635px]">
          {t("app.board.board-player.table.name")}
        </div>
        <div className="text-center capitalize font-medium font-Fredoka text-lg w-[100px]">
          {t("app.score")}
        </div>
      </div>

      <div className="w-full">{filteredPlayers}</div>
    </div>
  );
}
