// socket.js

import io from "socket.io-client";
import { SOCKET_URL } from "@/lib/config";

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  upgrade: false,
  autoConnect: false,
});
