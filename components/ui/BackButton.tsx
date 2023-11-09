import React from "react";
import { GoArrowLeft } from "react-icons/go";

import DarkButton from "@/components/ui/DarkButton";
export default function BackButton({
  onClick,
  className,
}: {
  onClick: Function;
  className: string;
}) {
  return (
    <DarkButton className={className} onClick={onClick}>
      <GoArrowLeft />
    </DarkButton>
  );
}
