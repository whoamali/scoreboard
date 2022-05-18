interface IPropd {
  show: boolean;
  type: "error" | "warning" | "info" | undefined;
  message: string | JSX.Element | JSX.Element[] | undefined;
  position: "left" | "right";
}

export default function Alert({ position, message, type, show }: IPropd) {
  return (
    <>
      {show && (
        <div
          className={`absolute ${
            position === "left" ? "left-2" : "right-2"
          } top-5 w-80 py-2 px-3 rounded-md capitalize font-Fredoka text-white ${
            type === "error"
              ? "bg-red-800"
              : type === "warning"
              ? "bg-orange-400"
              : "bg-blue-500"
          }`}
        >
          {message}
        </div>
      )}
    </>
  );
}
