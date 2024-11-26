import { io, Socket } from "socket.io-client";

const URL = "http://localhost:8989/";

// const useCustomerSocket = (): Socket | null => {
//   const [socket, setSocket] = useState<Socket | null>(null);

//   useEffect(() => {
//     const socketInstance = io(URL);
//     setSocket(socketInstance);

//     socketInstance.on("connect", () => {
//       console.log("Connected to customer server ");
//     });

//     return () => {
//       socketInstance.disconnect();
//       console.log("Socket customer disconnected");
//     };
//   }, []);

//   return socket;
// };

// export default useCustomerSocket;

let socket: Socket | null = null;

export const initializeCustomerSocket = (): Socket => {
  if (!socket) {
    socket = io(URL, {
      transports: ["websocket"],
    });
    console.log("Socket initialized!");
  }
  return socket;
};

export const getCustomerSocket = (): Socket | null => {
  return socket;
};

export const disconnectCustomerSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
    // console.log("Socket disconnected!");
  }
};
