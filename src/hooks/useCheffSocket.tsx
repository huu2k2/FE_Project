// hooks/useCheffSocket.ts
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

const URL = "http://localhost:3000/cheff";

export const useCheffSocket = () => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(URL);
    socketRef.current = socket;

    socket.on("connection", () => {
      console.log("Connected to server");
    });

    return () => {
      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });
      socket.disconnect();
    };
  }, []);

  return socketRef.current;
};
