import React, { useContext, useEffect, useState } from "react";
import { useSocket } from "../contexts/SocketContext";
import Message from "./Message";

const MessageCont = () => {
  const [messages, setMessages] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on("chat_message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        socket.off("chat_message");
      };
    }
  }, [socket]);

  const containerStyle = {
    minWidth: "80%",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={containerStyle}>
      {messages?.map((message, index) => (
        <Message
          key={index}
          message={message.message}
          username={message.username}
        />
      ))}
    </div>
  );
};

export default MessageCont;
