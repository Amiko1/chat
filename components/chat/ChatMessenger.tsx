"use client";
import MessengerForm from "@/components/chat/MessengerForm";
import MessengerMessage from "@/components/chat/MessengerMessage";
import UserFinding from "@/components/chat/UserFinding";
import UserFounded from "@/components/chat/UserFounded";
import UserDiscconected from "@/components/chat/UserDiscconected";
import React, { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { disconnect } from "process";

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
  useEffect((): any => {
    socket.on("chat-message", intialiseEvent);
    socket.on("joined", (isConnected) => {
      if (isConnected) {
        setStatus("connected");
      }
    });
    socket.on("disconnected", () => {
      setStatus("disconnected");
    });
    return () => {
      socket.removeAllListeners();
    };
  }, []);

  const intialiseEvent = (message: string) => {
    setMessages((prevMessages: any) => [...prevMessages, message]);
  };

  const sendMessage = () => {
    socket.emit("chat-message", newMessage);
    setNewMessage("");
  };

  const handleNext = () => {
    socket.disconnect();
    socket.connect();
    setStatus("connecting");
  };
  return (
    <div
      className={`w-full h-full px-4 flex flex-col justify-between gap-6  ${
        status === "notConnecting" ? "blur-sm" : ""
      }`}
    >
      <section className="overflow-y-auto   p-4 border-slate-800">
        {status === "connecting" && <UserFinding />}
        {status === "connected" && <UserFounded />}
        {status === "disconnected" && <UserDiscconected onNext={handleNext} />}
        {status !== "disconnected" &&
          status !== "connecting" &&
          messages.map((messages: any) => {
            return (
              <MessengerMessage
                key={messages.id}
                message={messages.message}
                authorId={messages.socketId}
                userId={socket.id}
              />
            );
          })}
      </section>
      <section className=" w-11/12 flex gap-2 mb-10">
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
