// socket.js

import io from "socket.io-client";
import { SOCKET_URL } from "@/lib/config";

let socket = null;
console.log(socket, "suckit");
export const getSocket = () => {
  if (!socket) {
    socket = io(SOCKET_URL);
  }

  return socket;
};
