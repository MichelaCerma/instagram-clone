import "./Posts.css";
import Post from "../Post/Post";
const Posts = ({ data }) => {
  return (
    <div className="">
      {data.map((post) => (
        <Post postData={post} key={post.id} />
      ))}
    </div>
  );
};
export default Posts;
