import { io } from "socket.io-client";

const URL = "http://localhost:8989/cheff";

export const cheffSocket = io(URL);
