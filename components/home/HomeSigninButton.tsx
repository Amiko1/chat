"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = ({ className }) => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <Button className={...className} onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <Button className={...className} onClick={() => signIn()}>
      Sign In
    </Button>
  );
};

export default SigninButton;
