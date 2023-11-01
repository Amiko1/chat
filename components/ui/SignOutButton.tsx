"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const { data: session } = useSession();
  if (!session) {
    return;
  }
  return (
    <Button onClick={() => signOut()} className="h-9">
      SignOut
    </Button>
  );
}
