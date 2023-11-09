import React from "react";
import DarkButton from "../ui/DarkButton";
export default function UserFounded({ onNext }: { onNext: Function }) {
  return (
    <>
      <div className="flex items-center  gap-2 justify-center   ">
        <p className="text-md  lg:text-2xl">
          user disconnected 😏 , try to find other{" "}
        </p>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-300"></span>
        </span>
      </div>

      <div className="w-20 m-auto mt-10">
        <DarkButton onClick={onNext}>Next</DarkButton>
      </div>
    </>
  );
}
