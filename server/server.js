var uniqid = require("uniqid");

// server/server.js
const http = require("http");
const server = http.createServer((req, res) => {
  // Handle HTTP requests if needed
});

const socketRooms = [];

const getRoom = (socketId) => {
  const room = socketRooms.find((room) => {
    return room.users.includes(socketId);
  });

  return room;
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
    setTimeout(() => {
      socketRooms.forEach((room) => {
        if (room.users.includes(socket.id)) {
          const index = room.users.indexOf(socket.id);
          if (index !== -1) {
            room.users.splice(index, 1); // Remove the item at the found index
          }
        }
      });
    }, 0);
    io.emit("disconnected");
  });

  io.on("disc", () => {
    console.log("discc");

    socketRooms.forEach((room) => {
      if (room.users.includes(socket.id)) {
        const index = room.users.indexOf(socket.id);
        if (index !== -1) {
          room.users.splice(index, 1); // Remove the item at the found index
        }
      }
    });
    io.emit("disconnected");
  });

  // Handle chat messages
  socket.on("chat-message", (message) => {
    io.to(getRoom(socket.id).roomId).emit("chat-message", {
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
      const pickedRoom = socketRooms[randomRoomIndex];
      pickedRoom.users.push(socket.id);
      socket.join(pickedRoom.roomId);
    } else {
      join(socket);
    }
  };

  socket.on("joinRoom", () => {
    randomJoin(socket);

    if (getRoom(socket.id)) {
      const areUsersConnected = getRoom(socket.id).users.length > 1;
      io.to(getRoom(socket.id).roomId).emit("joined", areUsersConnected);
    }
  });
  const clientCount = io.engine.clientsCount;
  console.log(`Current client count: ${clientCount}`);
});

server.listen(3001, () => {
  console.log("WebSocket server listening on port 3001");
});
