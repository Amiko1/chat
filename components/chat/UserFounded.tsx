import React from "react";

export default function UserFounded() {
  return (
    <>
      <div className="flex items-center  gap-2 justify-center   ">
        <p className="text-2xl">Start chating 🥰, a Stranger Founded </p>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-300"></span>
        </span>
      </div>
    </>
  );
}
