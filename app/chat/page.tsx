import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import ChatSidebar from "@/components/chat/chatSidebar";

export default async function Page() {
  const session = await getServerSession();
  console.log(session, "sesia");

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div>
      <aside className="h-full">
        <ChatSidebar />
      </aside>
      <main></main>
    </div>
  );
}
