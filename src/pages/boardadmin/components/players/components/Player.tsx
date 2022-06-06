import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { axiosIns } from "../../../../../utils";

interface Inputs {
  name: string;
  score: number;
}

interface IProps {
  adminKey: string;
  player_id: string;
  name: string | null;
  score: number;
  editable: boolean;
  setEditable(id: string): void;
}

export default function Player({
  adminKey,
  player_id,
  name,
  score,
  editable,
  setEditable,
}: IProps) {
  const [nameState, setName] = React.useState<string | null>(name);
  const [scoreState, setScore] = React.useState<number>(score);
  const [edited, setEdited] = React.useState(false);
  const [hide, setHide] = React.useState(false);
  const { t } = useTranslation();

  const onSave = React.useCallback(async (): Promise<void> => {
    const response = await axiosIns.post("/admin/put/player", {
      admin_key: adminKey,
      player_id,
      name: nameState,
      score: scoreState,
    });
    if (response) {
      setEditable("");
      setEdited(false);
    }
  }, [nameState, scoreState]);

  const onDelete = React.useCallback(async (): Promise<void> => {
    const response = await axiosIns.post("/admin/delete/player", {
      admin_key: adminKey,
      player_id,
    });
    if (response) {
      setEditable("");
      setEdited(false);
      setHide(true);
    }
  }, []);

  return (
    <>
      {!hide && (
        <div
          className={`mb-2 px-4 rounded-md transition-all font-Fredoka text-slate-900 ${
            editable
              ? "bg-orange-100 py-2 flex-col items-start justify-center"
              : "cursor-pointer bg-orange-50 py-4"
          }`}
          onClick={e => {
            if (!editable) {
              setEditable(player_id);
            }
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              {editable ? t("app.boardadmin.players.player.edit") : nameState}
            </div>
            {editable ? (
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="text-sm cursor-pointer transition text-red-500 hover:text-red-600"
                onClick={() => onDelete()}
              />
            ) : (
              <div>
                {scoreState} <FontAwesomeIcon icon={faAngleDown} />
              </div>
            )}
          </div>
          {editable && (
            <div className="mt-4 mb-2">
              <div className="flex w-full px-3 py-2">
                <label className="capitalize">
                  {t("app.board.board-player.table.name")}:{" "}
                </label>
                <input
                  className="flex-1 ml-1 rounded px-1"
                  type="text"
                  value={nameState ?? "null"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value);
                    setEdited(e.target.value !== name);
                  }}
                />
              </div>
              <div className="flex w-full px-3 py-2">
                <label className="capitalize">{t("app.score")}: </label>
                <div className="flex items-center justify-center flex-1">
                  <button
                    className="bg-orange-400 text-white w-7 mr-1 rounded-sm"
                    onClick={() => {
                      setScore(preScore => {
                        setEdited(preScore - 10 !== score);
                        return preScore - 10;
                      });
                    }}
                  >
                    {"-10"}
                  </button>
                  <button
                    className="bg-orange-400 text-white w-7 mr-1 rounded-sm"
                    onClick={() => {
                      setScore(preScore => {
                        setEdited(preScore - 5 !== score);
                        return preScore - 5;
                      });
                    }}
                  >
                    {"-5"}
                  </button>
                  <button
                    className="bg-orange-400 text-white w-7 mr-1 rounded-sm"
                    onClick={() => {
                      setScore(preScore => {
                        setEdited(preScore - 1 !== score);
                        return preScore - 1;
                      });
                    }}
                  >
                    {"-1"}
                  </button>
                  <input
                    className="w-[100px] text-center"
                    type="number"
                    value={scoreState}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setScore(Number(e.target.value));
                      setEdited(Number(e.target.value) !== score);
                    }}
                  />
                  <button
                    className="bg-orange-400 text-white w-7 ml-1 rounded-sm"
                    onClick={() => {
                      setScore(preScore => {
                        setEdited(preScore + 1 !== score);
                        return preScore + 1;
                      });
                    }}
                  >
                    {"+1"}
                  </button>
                  <button
                    className="bg-orange-400 text-white w-7 ml-1 rounded-sm"
                    onClick={() => {
                      setScore(preScore => {
                        setEdited(preScore + 5 !== score);
                        return preScore + 5;
                      });
                    }}
                  >
                    {"+5"}
                  </button>
                  <button
                    className="bg-orange-400 text-white w-7 ml-1 rounded-sm"
                    onClick={() => {
                      setScore(preScore => {
                        setEdited(preScore + 10 !== score);
                        return preScore + 10;
                      });
                    }}
                  >
                    {"+10"}
                  </button>
                </div>
              </div>
              <div className="w-full flex items-center justify-around px-3 mt-2">
                <button
                  className={`w-[45%] text-center rounded ${
                    edited
                      ? "border-orange-600 bg-orange-600 text-white"
                      : "border-gray-300 bg-gray-300 text-slate-700"
                  }`}
                  onClick={() => onSave()}
                  disabled={!edited}
                >
                  {t("app.save")}
                </button>
                <button
                  className="w-[45%] text-center transition text-slate-900 border border-slate-900 hover:text-white hover:border-slate-900 hover:bg-slate-900 rounded"
                  onClick={() => {
                    setEditable("");
                  }}
                >
                  {t("app.cancel")}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
