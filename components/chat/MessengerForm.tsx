"use client";

import { Input } from "@/components/ui/input";
import DarkButton from "../ui/DarkButton";

type Props = {
  text: string;
  onClick: Function;
  onChange: Function;
};

export default function MessengerForm({ text, onClick, onChange }: Props) {
  const handler = () => {
    onChange(text);
  };
  return (
    <>
      <Input
        className=""
        placeholder="Type your message here."
        onChange={handler}
        value={text}
      />
      ;<DarkButton onClick={onClick}>SEND</DarkButton>
    </>
  );
}
