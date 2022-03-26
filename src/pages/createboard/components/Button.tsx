interface IProps {
  children: JSX.Element | string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: IProps) {
  return (
    <button
      className={
        "border-2 border-orange-600 rounded-md bg-orange-600 text-white font-normal text-xl px-2 py-1 font-Fredoka w-full capitalize "
      }
      onClick={e => {
        props.onClick(e);
      }}
      type="submit"
    >
      {props.children}
    </button>
  );
}
