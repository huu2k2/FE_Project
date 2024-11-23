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

interface Payload {
  nameDish: string;
  orderId: string[];
}
const handleSendNotificationDish = (
  socket: Socket,
  ev: string,
  payload: Payload,
) => {
  socket.emit(ev , payload);
};
export { handleReceiveMess, handleSendMess, handleSendNotificationDish };
