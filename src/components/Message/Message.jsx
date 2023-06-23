import { useState, useEffect } from "react";
import MessageList from "../messageList";
import Conversation from "../../conversation/Conversation";
import "./Message.css";
import { GET } from "../../utils/http";

const Message = () => {
  const [message, setMessage] = useState([]);
  const [chat, setChat] = useState("");
  useEffect(() => {
    GET("https://api.npoint.io/d0f57cb8df2bf9e547ec").then((data) =>
      setMessage(data)
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
      case "Maria":
        return (
          <>
            <Conversation
              setChat={setChat}
              messageData={message.find(
                (chat) => chat.participants[1].username === "Maria"
              )}
            />
          </>
        );
        break;
      case "Julia":
        return (
          <Conversation
            setChat={setChat}
            messageData={message.find(
              (chat) => chat.participants[1].username === "Julia"
            )}
          />
        );
        break;
      case "Mark":
        return (
          <Conversation
            setChat={setChat}
            messageData={message.find(
              (chat) => chat.participants[1].username === "Mark"
            )}
          />
        );
        break;
      case "Linda":
        return (
          <Conversation
            setChat={setChat}
            messageData={message.find(
              (chat) => chat.participants[1].username === "Linda"
            )}
          />
        );
        break;
      case "Lucas":
        return (
          <Conversation
            setChat={setChat}
            messageData={message.find(
              (chat) => chat.participants[1].username === "Lucas"
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
