import "./StoryModal.css";

const StoryModal = ({ open }) => {

  return (
    <div className={`modalStory ${open ? "open" : ""}`} open={true}>
      <p>x</p>
    </div>
  );
};
export default StoryModal;
