import MessengerForm from "@/components/chat/MessengerForm";
import DarkButton from "../ui/DarkButton";
import MessengerMessage from "@/components/chat/MessengerMessage";
export default function ChatMessenger() {
  return (
    <div className="w-full h-full relative px-4">
      <section style={{ maxWidth: "75rem" }}>
        <MessengerMessage />
      </section>
      <section
        className="absolute bottom-10 w-11/12 flex gap-2 "
        style={{ maxWidth: "75rem" }}
      >
        <MessengerForm />
        <DarkButton>SEND</DarkButton>
      </section>
    </div>
  );
}
