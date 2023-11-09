import React from "react";
import SignOutButton from "@/components/ui/SignOutButton";
import DarkButton from "../ui/DarkButton";
import ModeToggler from "@/components/ui/ModeToggler";

export default function AppHeader() {
  return (
    <header className=" flex justify-between w-full items-center pt-3 pb-4 sticky  top-0  px-4 z-20 bg-slate-900 md:bg-inherit">
      <div>
        <p className="text-white text-lg">STRANGER</p>
      </div>
      <div className="flex items-center gap-4">
        <SignOutButton />
        <ModeToggler />
      </div>
    </header>
  );
}
