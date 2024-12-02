import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { handleSendMess } from "./fc.socket";
import { ip } from "../utils/baseURL";

const URL = `http://${ip}:8989/`;

const useCustomerSocket = (): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io(URL);
    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("Connected to customer server ");
      const orderId = localStorage.getItem("orderId") || null;
      handleSendMess(socketInstance!, "agianConnect", orderId);
      console.log(socketInstance.id);
    });

    return () => {
      socketInstance.disconnect();
      console.log("Socket customer disconnected");
    };
  }, []);

  return socket;
};

export default useCustomerSocket;

// let socket: Socket | null = null;

// export const initializeCustomerSocket = (): Socket => {
//   if (!socket) {
//     socket = io(URL, {
//       transports: ["websocket"],
//     });
//     console.log("Socket initialized!");
//   }
//   return socket;
// };

// export const getCustomerSocket = (): Socket | null => {
//   return socket;
// };

// export const disconnectCustomerSocket = (): void => {
//   if (socket) {
//     socket.disconnect();
//     socket = null;
//     // console.log("Socket disconnected!");
//   }
// };
