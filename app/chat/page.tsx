"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import ChatSidebar from "@/components/chat/chatSidebar";
import ChatMessenger from "@/components/chat/ChatMessenger";
import BackButton from "@/components/ui/BackButton";
import { socket } from "@/lib/socket";
import { useEffect, useState } from "react";

export default function Page() {
  const [status, setStatus] = useState("notConnecting");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const { data: session, status: authStatus } = useSession();

  if (authStatus === "unauthenticated") {
    redirect("/");
  }
  useEffect(() => {
    switch (status) {
      case "connecting":
        socket.disconnect();
        socket.connect();
        socket.emit("connecting", { data: "emit" });
      default:
        break;
    }
  }, [status]);
  return (
    <div className="overflow-hidden">
      <aside
        className={`absolute top-0 z-10  h-full w-full pt-24  md:w-96 transition ease-in-out md:transition-none md:translate-x-0 duration-500 z-10 		 ${
          !isSideBarOpen && "-translate-x-full"
        } `}
      >
        <ChatSidebar
          status={status}
          setStatus={setStatus}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      </aside>

      <main className="md:pl-96 h-full mt-6 relative">
        <BackButton
          className={`ml-4 mb-4 absolute   md:hidden transition      ${
            isSideBarOpen && "hidden"
          } `}
          onClick={() =>
            setIsSideBarOpen((isSideBarOpen: boolean) => !isSideBarOpen)
          }
        />
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
