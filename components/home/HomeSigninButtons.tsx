"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = ({ className }: { className: string }) => {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <>
      <div className="flex gap-2 ">
        <Button className={`${className} bg-yellow-500`} onClick={handleClick}>
          google signin
        </Button>
        {/* <Button className={`${className} bg-blue-500`} onClick={handleClick}>
          faceboo signin
        </Button> */}
      </div>
    </>
  );
};

export default SigninButton;
