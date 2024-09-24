// SocketContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import UserContext from "./UserContext";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user && user.username) {
      const newSocket = io("http://localhost:8000");

      newSocket.on("connect", () => {
        newSocket.emit("join", user.username);
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
      });

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }
  }, [user]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};
