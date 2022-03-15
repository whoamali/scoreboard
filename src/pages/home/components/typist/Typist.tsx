import TextTypist from "react-text-typist";

export default function Typist() {
  return (
    <TextTypist
      sentences={["Completely Free", "Fast and Optimal", "Easy to use"]}
      cursorBlinkSpeed={500}
      cursorClassName={"text-orange-600"}
      typingSpeed={100}
      deletingSpeed={20}
      pauseTime={2000}
      className={"text-neutral-500 font-Fredoka text-3xl"}
    />
  );
}
