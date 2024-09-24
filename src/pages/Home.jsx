import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useSocket } from "../contexts/SocketContext";
import Chat from "../components/Chat";

const Home = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { user } = useContext(UserContext);
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        setIsConnected(true);
      });

      socket.on("disconnect", () => {
        setIsConnected(false);
      });

      socket.on("chat_message", (message) => {
        console.log(message);
      });

      return () => {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("chat_message");
      };
    }
  }, [socket]);

  console.log(user);
  return (
    <>
      <p>
        {isConnected ? "Estas conectado como " : "Desconectado"}
        {user && user.username}
      </p>
      <Chat />
    </>
  );
};

export default Home;
