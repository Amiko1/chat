var uniqid = require("uniqid");

// server/server.js
const http = require("http");
const server = http.createServer((req, res) => {
  // Handle HTTP requests if needed
});

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with the origin you want to allow
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
  // Handle chat messages
  socket.on("chat-message", (message) => {
    io.emit("chat-message", { message, id: uniqid(), socketId: socket.id }); // Broadcast the message to all connected clients
  });
  const clientCount = io.engine.clientsCount;
  console.log(`Current client count: ${clientCount}`);
});

server.listen(3001, () => {
  console.log("WebSocket server listening on port 3001");
});
