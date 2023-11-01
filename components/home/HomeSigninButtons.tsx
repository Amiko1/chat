"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = ({ className }) => {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <>
      <div className="flex gap-2 ">
        <Button className={`${className} bg-yellow-500`} onClick={handleClick}>
          Sign In with google
        </Button>
        <Button className={`${className} bg-blue-500`} onClick={handleClick}>
          Sign In with Facebook
        </Button>
      </div>
    </>
  );
};

export default SigninButton;
