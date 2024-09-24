import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useSocket } from "../contexts/SocketContext";

const Form = () => {
  const { user } = useContext(UserContext);
  const socket = useSocket();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (socket && user && message.trim()) {
      socket.emit("chat_message", {
        username: user.username,
        message: message.trim(),
      });
      setMessage(""); // Clear the input field after sending the message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
