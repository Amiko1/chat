import MessengerForm from "@/components/chat/MessengerForm";
import DarkButton from "../ui/DarkButton";
export default function ChatMessenger() {
  return (
    <div className="w-full h-full relative px-6 relative ">
      <div className="absolute bottom-6 w-11/12 flex gap-2">
        <MessengerForm />
        <DarkButton>SEND</DarkButton>
      </div>
    </div>
  );
}
