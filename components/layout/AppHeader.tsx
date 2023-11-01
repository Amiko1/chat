import React from "react";
import SignOutButton from "@/components/ui/SignOutButton";
import ModeToggler from "@/components/ui/ModeToggler";

export default function AppHeader() {
  return (
    <header className="flex justify-between w-full items-center pt-3 pb-5 sticky  top-0  px-4">
      <div>
        <p>LOGO</p>
      </div>
      <div className="flex items-center gap-4">
        <SignOutButton />
        <ModeToggler />
      </div>
    </header>
  );
}
