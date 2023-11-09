import DarkButton from "@/components/ui/DarkButton";
import ProfileButton from "@/components/chat/ProfileButton";
import SocialLinks from "../ui/SocialLinks";

export default function ChatSidebar({ setStatus }: { setStatus: Function }) {
  const handleIsConnnecting = () => {
    setStatus("connecting");
  };
  return (
    <section className="px-3 relative h-full bg-slate-900">
      <div className="fixed w-full  md:block dark:bg-slate-800 bg-slate-900 dark:opacity-50  h-screen md:w-96 left-0 top-0  -z-10"></div>
      <div className="flex gap-4 flex-wrap justify-center">
        <DarkButton onClick={handleIsConnnecting} className="w-full">
          start text chat with stranger
        </DarkButton>
        <DarkButton className="w-full" disabled>
          VOICE CHAT COMMING SOOON
        </DarkButton>
        <div className="fixed left-4 bottom-4">
          <ProfileButton />
        </div>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
