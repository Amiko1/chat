import React from "react";
import ModeToggler from "@/components/ui/ModeToggler";

export default function AppHeader() {
  return (
    <header className="flex justify-between items-center pt-3 pb-5">
      <div>
        <p>LOGO</p>
      </div>
      <div>
        <ModeToggler />
      </div>
    </header>
  );
}
