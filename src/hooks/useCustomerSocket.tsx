import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const URL = import.meta.env.VITE_API_BASE_URL

const useCustomerSocket = (): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    console.log("init");
    const socketInstance = io(URL);
    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("Connected to customer server ");
    });

    return () => {
      socketInstance.disconnect();
      console.log("Socket customer disconnected");
    };
  }, []);

  return socket;
};

export default useCustomerSocket;
