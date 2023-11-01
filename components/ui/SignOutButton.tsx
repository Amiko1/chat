"use client";
import { signOut, useSession } from "next-auth/react";
import DarkButton from "@/components/ui/DarkButton";

export default function SignOutButton() {
  const { data: session } = useSession();
  if (!session) {
    return;
  }
  return (
    <DarkButton
      onClick={() => signOut()}
      className="h-9 bg-slate-800 text-white"
    >
      SignOut
    </DarkButton>
  );
}
