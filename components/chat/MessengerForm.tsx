"use client";

import { Input } from "@/components/ui/input";
import DarkButton from "../ui/DarkButton";

export default function MessengerForm() {
  return (
    <>
      <Input className="" placeholder="Type your message here." />;
      <DarkButton>SEND</DarkButton>
    </>
  );
}
