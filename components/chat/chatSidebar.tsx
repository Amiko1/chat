import DarkButton from "@/components/ui/DarkButton";
import ProfileButton from "@/components/chat/ProfileButton";

export default function ChatSidebar() {
  return (
    <section className="w-full px-3 pt-4 relative h-full bg-slate-900">
      <div className="fixed  w-full dark:bg-slate-800 bg-slate-900 dark:opacity-50  h-screen md:w-96 left-0 top-0  -z-10"></div>
      <div className="flex gap-4 flex-wrap justify-center">
        <DarkButton className="w-full">
          start text chat with stranger
        </DarkButton>
        <DarkButton className="w-full" disabled>
          VOICE CHAT COMMING SOOON
        </DarkButton>
        <div className="absolute left-4 bottom-4">
          <ProfileButton />
        </div>
      </div>
    </section>
  );
}
