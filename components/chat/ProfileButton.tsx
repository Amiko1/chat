"use client";

import { BsPersonCircle } from "react-icons/bs";
import { useSession } from "next-auth/react";

export default function ProfileButton() {
  const { data: session } = useSession();
  return (
    <button>
      <span className="flex justify-center items-center gap-4">
        <BsPersonCircle className="text-3xl "></BsPersonCircle>
        <span>{session?.user?.name}</span>
      </span>
    </button>
  );
}
