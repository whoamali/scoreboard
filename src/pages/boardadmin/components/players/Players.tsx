import * as React from "react";

import { Player, AddPlayer } from "./components";
import { axiosIns } from "./../../../../utils";
import { t } from "i18next";

interface IProps {
  adminKey: string;
}

interface Players {
  players:
    | { player_id: string; name: string | null; score: number }[]
    | undefined;
}

export default function Players({ adminKey }: IProps) {
  const [players, setPlayers] = React.useState<Players["players"]>();
  const [search, setSearch] = React.useState<string>("");
  const [order, setOrder] = React.useState<
    "most" | "least" | "order" | undefined
  >("order");
  const [editable, setEditable] = React.useState<string>("");

  React.useEffect(() => {
    axiosIns
      .get("/admin/get/players", {
        params: {
          admin_key: adminKey,
        },
      })
      .then(res => {
        setPlayers(res.data.players);
        console.log(res.data.players);
      });
  }, []);

  React.useEffect(() => {
    console.log(players);
  }, [players]);

  const handlePlayerEditable = (id: string): void => {
    setEditable(id);
  };

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
    ?.filter(e => e.name?.toLowerCase()?.replace(/\s/g, "")?.includes(search))
    ?.map((e, index) => (
      <Player
        adminKey={adminKey}
        key={e.player_id}
        player_id={e.player_id}
        name={e.name}
        score={e.score}
        editable={editable === e.player_id}
        setEditable={handlePlayerEditable}
      />
    ));

  return (
    <div className="flex flex-col rounded-md h-[800px] overflow-x-auto px-2 bg-gray-50">
      <div className="sticky top-0 py-4">
        <input
          className="w-9/12 mr-1 h-[50px] p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
          type="text"
          placeholder={"find the player..."}
          onChange={e =>
            setSearch(e.target.value.toLowerCase().replace(/\s/g, ""))
          }
        />
        <select
          className="w-2/12 ml-1 h-[50px] bg-white p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
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

      <div>{filteredPlayers}</div>
      <AddPlayer />
    </div>
  );
}
