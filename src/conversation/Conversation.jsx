import { useState } from "react";
import "./Conversation.css";
const Conversation = ({ messageData, setChat }) => {
  return (
    <>
      <div className="Chat__topSide">
        <p onClick={() => setChat("")}>{"<"}</p>
        <img
          src={messageData.participants[1].avatar_url}
          alt=""
          className="Chat__imgFriend"
        />
        <p>{messageData.username}</p>
      </div>
      <div className="Chat">
        {messageData.messages.map((mess) =>
          mess.sender === "John" ? (
            <div className="Chat_John">{mess.content}</div>
          ) : (
            <>
              <div className="Chat_friend">{mess.content}</div>
            </>
          )
        )}
      </div>
    </>
  );
};
export default Conversation;
