import io from "socket.io-client";

const socket = io("http://192.168.2.54:9000");

export default socket;
