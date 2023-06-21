import "./App.css";
import Stories from "./components/Stories/Stories";
import TopBar from "./components/TopBar";
import Posts from "./components/Posts";
import { useEffect, useState } from "react";
import Camera from "./components/Camera";
import Message from "./components/Message";

function App() {
  const [section, setSection] = useState("home");
  const [userList, setUserlist] = useState([]);
  const [post, setPost] = useState([]);
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/b8f3374d301e3ff982dc")
      .then((res) => res.json())
      .then((data) => setUserlist(data));
  }, []);
  useEffect(() => {
    fetch("https://api.npoint.io/e2e2815a967c684654a9")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  useEffect(() => {
    fetch("https://api.npoint.io/8903b493a8632c8aa074")
      .then((res) => res.json())
      .then((data) => setMessage(data));
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
        return <Message data={message} />;
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
