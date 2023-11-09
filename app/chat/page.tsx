"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import ChatSidebar from "@/components/chat/chatSidebar";
import ChatMessenger from "@/components/chat/ChatMessenger";
import { socket } from "@/lib/socket";
import { useEffect, useState } from "react";

export default function Page() {
  const [status, setStatus] = useState("notConnecting");
  const session = useSession();

  if (!session || !session) {
    redirect("/");
  }

  useEffect(() => {
    switch (status) {
      case "connecting":
        socket.connect();
        socket.emit("connecting", { data: "emit" });
      default:
        break;
    }
  }, [status]);
  return (
    <div className="overflow-hidden">
      <aside className="absolute top-0 z-10  h-full w-full pt-24  md:w-96">
        <ChatSidebar setStatus={setStatus} />
      </aside>
      <main className="md:pl-96 h-full mt-6 relative">
        <ChatMessenger socket={socket} status={status} setStatus={setStatus} />
        {status === "notConnecting" && (
          <div className="md:pl-96 absolute left-0 top-0 bottom-0 right-0 flex justify-center items-center">
            <p className=" text-2xl">chose your chat type</p>
          </div>
        )}
      </main>
    </div>
  );
}
