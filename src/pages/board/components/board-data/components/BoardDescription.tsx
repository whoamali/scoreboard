interface IProps {
  description: string | undefined;
}

export default function BoardDescription({ description }: IProps) {
  return (
    <>
      {description !== undefined && (
        <p className="w-[700px] break-normal text-center text-neutral-500 text-ls mb-12">
          {description}
        </p>
      )}
    </>
  );
}
