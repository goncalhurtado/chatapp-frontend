import React, { useState } from "react";
import MessageCont from "./MessageCont";
import Form from "./Form";

const Chat = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MessageCont />
      <Form />
    </div>
  );
};

export default Chat;
