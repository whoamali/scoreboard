import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { axiosIns } from "./../../../../../utils";

interface IProps {
  children: string | JSX.Element | JSX.Element[];
  name: "board-options" | "players" | "admin-options" | "visit";
  active: boolean;
  setDivisionsState: (
    value: "board-options" | "players" | "admin-options",
  ) => void;
  adminKey: string;
}

export default function Division({
  children,
  active,
  name,
  setDivisionsState,
  adminKey,
}: IProps) {
  const navigate = useNavigate();

  const visit = (): void => {
    axiosIns
      .get(`/admin/get/admin_options/${adminKey}`)
      .then(res => {
        navigate(`/board/${res.data.data.user_key}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <button
      onClick={() => {
        name !== "visit" && setDivisionsState(name);
        name === "visit" && visit();
      }}
      className={`c-9 font-Fredoka capitalize py-2 my-1 rounded-md text-lg transition ${
        active ? "bg-slate-900 text-gray-100" : "bg-gray-100 text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}
