var uniqid = require("uniqid");

// server/server.js
const http = require("http");
const server = http.createServer((req, res) => {
  // Handle HTTP requests if needed
});

let socketRooms = [];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRoom = (socketId) => {
  const room = socketRooms.find((room) => {
    return room.users.includes(socketId);
  });

  return room;
};

const join = (socket) => {
  uniqueId = uniqid();
  socketRooms.push({
    roomId: uniqueId,
    users: [socket.id],
  });
  socket.join(uniqueId);
};

const randomJoin = (socket) => {
  shuffle(socketRooms);
  let flag = false;
  socketRooms.forEach((room) => {
    if (room.users.length === 1 && !room.users.includes(socket.id)) {
      flag = true;
      room.users.push(socket.id);
      socket.join(room.roomId);
      io.to(getRoom(socket.id).roomId).emit("joined", true);
    }
  });

  if (!flag) join(socket);
};

const removeFromRooms = (socket) => {
  socketRooms = socketRooms.filter((room) => !room.users.includes(socket.id));
};

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with the origin you want to allow
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    if (getRoom(socket.id)) {
      io.to(getRoom(socket.id).roomId).emit("disconnected");
      removeFromRooms(socket);
    }
  });

  // Handle chat messages
  socket.on("chat-message", (message) => {
    io.to(getRoom(socket.id).roomId).emit("chat-message", {
      message,
      id: uniqid(),
      socketId: socket.id,
    });
  });

  socket.on("connecting", () => {
    socket.leaveAll();

    randomJoin(socket);
  });

  const clientCount = io.engine.clientsCount;
  console.log(`Current client count: ${clientCount}`);
});

server.listen(3001, () => {
  console.log("WebSocket server listening on port 3001");
});
