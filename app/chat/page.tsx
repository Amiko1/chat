import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import ChatSidebar from "@/components/chat/chatSidebar";
import ChatMessenger from "@/components/chat/ChatMessenger";
export default async function Page() {
  const session = await getServerSession();
  console.log(session, "sesia");

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-[24rem,1fr]">
      <aside className="h-full">
        <ChatSidebar />
      </aside>
      <main>
        <ChatMessenger />
      </main>
    </div>
  );
}
