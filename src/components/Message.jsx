import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Message = ({ message, username }) => {
  const { user } = useContext(UserContext);
  const isCurrentUser = user && user.username === username;

  const messageStyle = {
    backgroundColor: isCurrentUser ? "green" : "#2F2F2F",
    color: "#ECECEC",
    borderRadius: "10px",
    width: "fit-content",
    textAlign: isCurrentUser ? "right" : "left",
    alignSelf: isCurrentUser ? "flex-end" : "flex-start",
    padding: "10px",
    margin: "10px",
  };

  const usernameStyle = {
    fontWeight: "bold",
    margin: "0",
    padding: "0",
    marginBottom: "5px",
  };

  const messageTextStyle = {
    margin: "0",
    padding: "0",
  };

  return (
    <div style={messageStyle}>
      <p style={usernameStyle}>{username}</p>
      <p style={messageTextStyle}>{message}</p>
    </div>
  );
};

export default Message;
