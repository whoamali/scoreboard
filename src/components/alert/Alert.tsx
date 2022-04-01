interface IPropd {
  show: boolean;
  type: "error" | "warning" | "info" | undefined;
  message: string | undefined;
}

export default function Alert({ message, type, show }: IPropd) {
  let typeColor = undefined;

  if (type === "error") {
    typeColor = "bg-red-800";
  } else if (type === "warning") {
    typeColor = "bg-orange-400";
  } else {
    typeColor = "bg-blue-500";
  }

  return (
    <>
      {show && (
        <div
          className={`absolute left-2 top-5 w-80 py-2 px-3 rounded-md capitalize font-Fredoka text-white ${typeColor}`}
        >
          {message}
        </div>
      )}
    </>
  );
}
