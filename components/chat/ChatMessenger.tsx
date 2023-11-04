"use client";
import MessengerForm from "@/components/chat/MessengerForm";
import MessengerMessage from "@/components/chat/MessengerMessage";

import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Replace with your server URL
export default function ChatMessenger() {
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect((): any => {
    // Listen for incoming messages
    socket.on("chat message", intialiseEvent);
    return () => {
      socket.off("chat message", intialiseEvent);
      socket.disconnect();
    };
  }, []);

  const intialiseEvent = (message: string) => {
    console.log(message);
    setMessages((prevMessages: any) => [...prevMessages, message]);
  };

  const sendMessage = () => {
    socket.emit("chat message", newMessage);
    setNewMessage("");
  };
  return (
    <div className="w-full h-full px-4 flex flex-col justify-between gap-6 ">
      <section className="overflow-y-auto   p-4 border-slate-800">
        {messages.map((messages: any) => {
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
        />
      </section>
    </div>
  );
}
