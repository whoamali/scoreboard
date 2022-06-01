interface IProps {
  index: number;
  player: {
    player_id: number;
    name: string | undefined | null;
    score: number;
  };
  unit: string | undefined;
}

export default function BoardPlayersRow({ index, player, unit }: IProps) {
  return (
    <div
      className={
        index % 2
          ? "flex w-full mt-2 py-2 rounded"
          : "flex w-full mt-2 py-2 rounded bg-orange-50 "
      }
    >
      <div className="text-center font-medium font-Fredoka text-sm w-[50px]">
        {index + 1}
      </div>
      <div className="text-left capitalize font-medium font-Fredoka text-base w-[635px]">
        {player.name ? player.name : "-"}
      </div>
      <div className="text-center font-medium font-Fredoka text-base w-[100px]">
        {player.score}
        <span className="text-sm">{unit}</span>
      </div>
    </div>
  );
}
