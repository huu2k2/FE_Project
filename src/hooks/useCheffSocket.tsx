import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const URL =`${import.meta.env.VITE_API_BASE_URL_SOCKET}/cheff`

const useCheffSocket = (): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io(URL);
    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("Connected to cheff server ");
    });

    return () => {
      socketInstance.disconnect();
      console.log("Socket cheff disconnected");
    };
  }, []);

  return socket;
};

export default useCheffSocket;
