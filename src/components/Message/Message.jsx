import { useState, useEffect } from "react";
import MessageList from "../messageList";
import Conversation from "../../conversation/Conversation";
import "./Message.css";
import { GET } from "../../utils/http";

const Message = () => {
  const [message, setMessage] = useState([]);
  const [chat, setChat] = useState("");
  useEffect(() => {
    GET("https://api.npoint.io/45615d0ddef177eef95b").then((data) =>
      setMessage(data.messageList)
    );
  }, []);

  const chatRendering = () => {
    switch (chat) {
      case "":
        return (
          message &&
          message.map((singleMessage) => (
            <MessageList
              key={singleMessage.id}
              message={singleMessage}
              setChat={setChat}
            />
          ))
        );
      case "Emily":
        return (
          <Conversation
            setMessage={message.find(
              (chat) => chat.participants[1].username === "Emily"
            )}
          />
        );
        break;
      case "Sarah":
        return (
          <Conversation
            setMessage={message.find(
              (chat) => chat.participants[1].username === "Sarah"
            )}
          />
        );
        break;
    }
  };
  return (
    <>
      <input type="text" className="message__input" placeholder="Search" />
      <div className="messages">{chatRendering()}</div>
    </>
  );
};
export default Message;
