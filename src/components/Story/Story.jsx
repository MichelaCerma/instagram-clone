import "./Story.css";

const Story = ({ data }) => {
  return (
    <div className="Story">
      <button className="Story__button">
        <img src={`${data.picture.thumbnail}`} className="Story__img" />
      </button>
      <p className="Story__nick">{data.login.username}</p>
    </div>
  );
};
export default Story;
