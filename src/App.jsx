import "./App.css";
import Stories from "./components/Stories/Stories";
import TopBar from "./components/TopBar";
import Posts from "./components/Posts";
import { useEffect, useState } from "react";
import Camera from "./components/Camera";
import Message from "./components/Message";
import { GET } from "./utils/http";

function App() {
  const [section, setSection] = useState("home");
  const [userList, setUserlist] = useState([]);
  const [post, setPost] = useState([]);
  // const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/b8f3374d301e3ff982dc")
      .then((res) => res.json())
      .then((data) => setUserlist(data));
  }, []);
  useEffect(() => {
    GET("https://api.npoint.io/e882b123cc0e0822f9de").then((data) =>
      setPost(data)
    );
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories data={userList} />
            <Posts data={post} />
          </>
        );
        break;
      case "camera":
        return <Camera />;
        break;
      case "message":
        return <Message />;
        break;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />

      {onSectionRender()}
    </>
  );
}

export default App;
