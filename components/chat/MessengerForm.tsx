"use client";

import { Input } from "@/components/ui/input";
import DarkButton from "../ui/DarkButton";

type Props = {
  text: string;
  onClick: Function;
  onChange: Function;
};

export default function MessengerForm({ text, onClick, onChange }: Props) {
  const handler = (txt: any) => {
    onChange(txt);
  };

  const keyHandler = (event: any) => {
    if (event.key === "enter") {
      onChange(event.target.value);
    }
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
    </>
  );
}
