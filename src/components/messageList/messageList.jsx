import "./messageList.css";
import { CameraIcon } from "../../icons";

const MessageList = ({ message, setChat }) => {
  return (
    <div
      className="Conversation"
      onClick={() => {
        setChat(`${message.participants[1].username}`);
      }}
    >
      <img src={message.participants[1].avatar_url} alt="" />
      <div className="Conversation">
        <p>{message.participants[1].username}</p>
        <p>{message.last_message_timestamp}</p>
        <p></p>
        <CameraIcon />
        <p className="Coversation__delivery">{}</p>
      </div>
    </div>
  );
};
export default MessageList;
