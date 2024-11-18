import { Socket } from "socket.io-client";

const handleReceiveMess = (
  socket: Socket,
  ev: string,
  callback: (mess: any) => void
): void => {
  socket.on(ev, (mess: any) => {
    callback(mess);
  });
};

const handleSendMess = (socket: Socket, ev: string, val: any): void => {
  socket.emit(ev, val);
};

export { handleReceiveMess, handleSendMess };
