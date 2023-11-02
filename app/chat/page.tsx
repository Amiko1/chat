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
    <div className="overflow-hidden">
      <aside className="absolute top-0 z-10  h-full w-full pt-24  md:w-96">
        <ChatSidebar />
      </aside>
      <main className="md:pl-96 h-full mt-6">
        <ChatMessenger />
      </main>
    </div>
  );
}
