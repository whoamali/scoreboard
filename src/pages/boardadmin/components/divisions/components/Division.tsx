interface IProps {
  children: string | JSX.Element | JSX.Element[];
  name: "board-options" | "players" | "admin-options";
  active: boolean;
  setDivisionsState: (
    value: "board-options" | "players" | "admin-options",
  ) => void;
}

export default function Division({
  children,
  active,
  name,
  setDivisionsState,
}: IProps) {
  return (
    <button
      onClick={() => {
        setDivisionsState(name);
      }}
      className={`font-Fredoka capitalize w-60 py-2 my-1 rounded-md text-lg transition ${
        active ? "bg-slate-900 text-gray-100" : "bg-gray-100 text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}
