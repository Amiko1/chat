var uniqid = require("uniqid");

// server/server.js
const http = require("http");
const server = http.createServer((req, res) => {
  // Handle HTTP requests if needed
});

const socketRooms = [];

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
    console.log(socketRooms);
    const roomId = socketRooms.find((room) => {
      return room.users.includes(socket.id);
    }).roomId;

    io.to(roomId).emit("chat-message", {
      message,
      id: uniqid(),
      socketId: socket.id,
    });
  });

  const join = (socket) => {
    uniqueId = uniqid();
    socketRooms.push({
      roomId: uniqueId,
      users: [socket.id],
    });
    socket.join(uniqueId);
  };

  const randomJoin = (socket) => {
    let roomIndexes = [];
    socketRooms.forEach((room, index) => {
      if (room.users.length === 1 && !room.users.includes(socket.id)) {
        roomIndexes.push(index);
      }
    });
    if (roomIndexes.length !== 0) {
      const randomRoomIndex =
        roomIndexes[Math.floor(Math.random() * roomIndexes.length)];
      console.log(randomRoomIndex);
      socketRooms[randomRoomIndex].users.push(socket.id);
      socket.join(socketRooms[randomRoomIndex].roomId);
    } else {
      join(socket);
    }
  };

  socket.on("joinRoom", () => {
    randomJoin(socket);
    console.log(socketRooms);
  });
  const clientCount = io.engine.clientsCount;
  console.log(`Current client count: ${clientCount}`);
});

server.listen(3001, () => {
  console.log("WebSocket server listening on port 3001");
});
