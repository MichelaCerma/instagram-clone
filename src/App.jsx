import "./App.css";
import Stories from "./components/Stories/Stories";
import TopBar from "./components/TopBar";
import Posts from "./components/Posts";
import { UserList } from "./mock/userList";
function App() {
  return (
    <>
      <TopBar />
      <Stories data={UserList} />
      <Posts />
    </>
  );
}

export default App;
