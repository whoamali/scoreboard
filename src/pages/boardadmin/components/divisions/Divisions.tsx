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
  return (
    <>
      <Division
        active={divisionsState === "board-options"}
        name="board-options"
        setDivisionsState={setDivisionsState}
      >
        {"Board Options"}
      </Division>
      <Division
        active={divisionsState === "players"}
        name="players"
        setDivisionsState={setDivisionsState}
      >
        {"Players"}
      </Division>
      <Division
        active={divisionsState === "admin-options"}
        name="admin-options"
        setDivisionsState={setDivisionsState}
      >
        {"Admin Options"}
      </Division>
    </>
  );
}
