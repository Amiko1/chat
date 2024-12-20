"use client";
import MessengerForm from "@/components/chat/MessengerForm";
import MessengerMessage from "@/components/chat/MessengerMessage";
import UserFinding from "@/components/chat/UserFinding";
import UserFounded from "@/components/chat/UserFounded";
import UserDiscconected from "@/components/chat/UserDiscconected";
import React, { useEffect, useState, useRef } from "react";
import { Socket } from "socket.io-client";
import { toast } from "react-toastify";

export default function ChatMessenger({
  socket,
  status,
  setStatus,
}: {
  socket: Socket;
  status: string;
  setStatus: Function;
}) {
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState("");
  const messageSection = useRef<HTMLDivElement>(null);
  useEffect((): any => {
    socket.on("message", intialiseEvent);
    socket.on("joined", () => {
      console.log("JOINED");
      setStatus("connected");
      setMessages([]);
    });
    socket.on("disconnected", () => {
      setStatus("disconnected");
    });

    return () => {
      socket.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (messageSection.current) {
      messageSection.current.scrollTop = messageSection.current.scrollHeight;
    }
  }, [messages]);

  const intialiseEvent = (state: any) => {
    console.log("MESSAGEe", state);
    setMessages((prevMessages: any) => [...prevMessages, state]);
  };

  const sendMessage = () => {
    if (!newMessage.length) {
      toast.error("Message should not be empty", {
        theme: "dark",
        icon: false,
      });
      return;
    }
    socket.emit("sendMessage", newMessage, (error: string) => {
      console.log(error);
    });
    setNewMessage("");
  };

  const handleNext = () => {
    setStatus("connecting");
  };
  return (
    <div
      className={`w-full h-full px-4 pt-10 flex flex-col justify-between gap-6  ${
        status === "notConnecting" ? "blur-sm" : ""
      }`}
    >
      <section
        className="overflow-y-auto   p-4 border-slate-800"
        ref={messageSection}
      >
        {status === "connecting" && <UserFinding />}
        {status === "connected" && <UserFounded />}
        {status === "disconnected" && <UserDiscconected onNext={handleNext} />}
        {status !== "disconnected" &&
          status !== "connecting" &&
          messages.map((messages: any) => {
            return (
              <MessengerMessage
                key={messages.id}
                message={messages.text}
                authorId={messages.socketId}
                userId={socket.id}
              />
            );
          })}
      </section>
      <section>
        <MessengerForm
          text={newMessage}
          onClick={sendMessage}
          onChange={setNewMessage}
          onNext={handleNext}
        />
      </section>
    </div>
  );
}
