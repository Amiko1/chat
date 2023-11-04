import MessengerForm from "@/components/chat/MessengerForm";
import MessengerMessage from "@/components/chat/MessengerMessage";
export default function ChatMessenger() {
  return (
    <div className="w-full h-full px-4 flex flex-col justify-between gap-6 ">
      <section className="overflow-y-auto   p-4 border-slate-800">
        <MessengerMessage />
        <MessengerMessage />
        <MessengerMessage />
        <MessengerMessage />
        <MessengerMessage />
        <MessengerMessage />
      </section>
      <section className=" w-11/12 flex gap-2 mb-10">
        <MessengerForm />
      </section>
    </div>
  );
}
