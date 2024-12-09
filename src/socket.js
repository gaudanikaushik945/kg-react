import { io } from "socket.io-client";

// Retrieve the JWT token from your local storage, cookie, or anywhere else you store it
const token = localStorage.getItem("authToken"); // Example, adjust based on your app's setup

// Initialize Socket.IO connection with JWT token
const socket = io("http://localhost:8000", {
  auth: {
    token: token, // Send the token to the server during the handshake
  },
});

socket.on("connect", () => {
  console.log("Connected to the server:", socket.id);
});

socket.on("error", (error) => {
  console.error("Error:", error);
});

export default socket;
