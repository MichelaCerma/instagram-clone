import "./Stories.css";
import Story from "../Story/Story";

const Stories = ({ data }) => {
  return (
    <>
      <div className="Stories">
        {data.map((story) => (
          <Story data={story} />
        ))}
      </div>
    </>
  );
};
export default Stories;
