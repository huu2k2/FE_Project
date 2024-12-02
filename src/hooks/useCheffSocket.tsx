import { io, Socket } from "socket.io-client";
import { ip } from "../utils/baseURL";
const URL = `http://${ip}:8989/cheff`;

let socket: Socket | null = null;

export const initializeCheffSocket = (): Socket => {
  if (!socket) {
    socket = io(URL, {
      transports: ["websocket"],
    });
    console.log("Socket initialized!");
  }
  return socket;
};

export const getSocket = (): Socket | null => {
  return socket;
};

export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log("Socket disconnected!");
  }
};
