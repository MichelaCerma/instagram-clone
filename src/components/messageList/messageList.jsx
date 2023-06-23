import "./messageList.css";
import { CameraIcon } from "../../icons";

const MessageList = ({ message, setChat }) => {
  const lastMessage = message.messages[message.messages.length - 1];

  return (
    <div
      className="Conversation"
      onClick={() => {
        setChat(`${message.participants[1].username}`);
      }}
    >
      <div className="Conversation__borderImg">
        <img
          className="Conversation__imgUser"
          src={message.participants[1].avatar_url}
          alt=""
        />
      </div>
      <div className="Conversation__userInfo">
        <p className="Conversation__username">{message.username}</p>
        <div className="Conversation__contentTime">
          <p className="Conversation__content">{lastMessage.content}</p>
          <p className="Conversation_time">{message.last_message_timestamp}</p>
        </div>
      </div>
      <CameraIcon />
    </div>
  );
};
export default MessageList;
