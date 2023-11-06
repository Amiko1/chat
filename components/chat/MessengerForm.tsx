"use client";

import { Input } from "@/components/ui/input";
import DarkButton from "../ui/DarkButton";

type Props = {
  text: string;
  onClick: Function;
  onChange: Function;
  onNext: Function;
};

export default function MessengerForm({
  text,
  onClick,
  onChange,
  onNext,
}: Props) {
  const handler = (txt: any) => {
    onChange(txt);
  };

  return (
    <>
      <Input
        className=""
        placeholder="Type your message here."
        onChange={(e) => handler(e.target.value)}
        value={text}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick(e);
          }
        }}
      />
      <DarkButton onClick={onClick}>SEND</DarkButton>
      <DarkButton onClick={onNext}>Next</DarkButton>
    </>
  );
}
