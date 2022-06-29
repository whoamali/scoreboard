import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

import { axiosIns } from "../../../../../utils";

interface IProps {
  adminKey: string;
  addPlayer: (addingPlayer: {
    player_id: string;
    name: string | null;
    score: number;
  }) => void;
}

interface Data {
  name: string;
  score: number;
}

export default function AddPlayer({ adminKey, addPlayer }: IProps) {
  const [enable, setEnable] = React.useState<boolean>(false);
  const { register, handleSubmit } = useForm<Data>();

  const onSubmit = (data: Data) => {
    axiosIns
      .post("/admin/post/player", {
        admin_key: adminKey,
        ...data,
      })
      .then(res => {
        addPlayer(res.data.data)
        setEnable(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div
      className={`transition-all ${
        !enable
          ? "w-[60px] flex items-center justify-center bg-orange-600 cursor-pointer right-5"
          : "c-10 c-lg-6 c-xl-5 c-xxl-3 bg-white border-2 border-slate-900 right-0"
      } h-[60px] fixed bottom-5 rounded-lg px-1`}
      onClick={() => {
        if (!enable) {
          setEnable(true);
        }
      }}
    >
      {!enable ? (
        <FontAwesomeIcon icon={faPlus} fontSize={32} color="white" />
      ) : (
        <div className="w-full h-full flex justify-around items-center">
          <input
            type="text"
            placeholder="Name"
            className="w-[310px] h-[40px] bg-white p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
            {...register("name", { required: true })}
          />
          <input
            type="number"
            placeholder="Score"
            className="w-[65px] text-center h-[40px] bg-white p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
            {...register("score", { required: true })}
          />
          <button
            className="border-orange-600 bg-orange-600 text-white text-center rounded h-[40px] w-14"
            onClick={handleSubmit(onSubmit)}
          >
            {"add"}
          </button>
          <button
            className="text-center transition text-slate-900 border border-slate-900 hover:text-white hover:border-slate-900 hover:bg-slate-900 rounded h-[40px] w-14"
            onClick={() => {
              setEnable(false);
            }}
          >
            {"cancel"}
          </button>
        </div>
      )}
    </div>
  );
}
