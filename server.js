const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
  },
});

const users = {}; 
const typingUsers = new Set();

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", (username) => {
    users[socket.id] = username;
    console.log(`${username} joined`);

    io.emit("user-list", Object.values(users));

    socket.broadcast.emit("chat-message", {
      user: "System",
      text: `${username} joined the chat`,
      time: new Date().toISOString(),
    });
  });

  socket.on("send-message", (text) => {
    const user = users[socket.id] || "Anonymous";
    const msg = {
      user,
      text,
      time: new Date().toISOString(),
    };

    io.emit("chat-message", msg); 
  });

  socket.on("typing", (isTyping) => {
    const user = users[socket.id];
    if (!user) return;

    if (isTyping) {
      typingUsers.add(user);
    } else {
      typingUsers.delete(user);
    }

    io.emit("typing-users", Array.from(typingUsers));
  });

  socket.on("disconnect", () => {
    const user = users[socket.id];
    delete users[socket.id];
    typingUsers.delete(user);

    io.emit("user-list", Object.values(users));
    io.emit("typing-users", Array.from(typingUsers));

    if (user) {
      socket.broadcast.emit("chat-message", {
        user: "System",
        text: `${user} left the chat`,
        time: new Date().toISOString(),
      });
    }

    console.log("User disconnected:", socket.id);
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on http://localhost:${PORT}`);
});
