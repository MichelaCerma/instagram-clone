import "./Stories.css";
import Story from "../Story/Story";

import React, { useState } from "react";
import StoryModal from "../StoryModal";

const Stories = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="Stories">
        {data &&
          data.map((story) => (
            <div onClick={() => setIsModalOpen(true)}>
              <Story data={story} />
            </div>
          ))}
      </div>
      <StoryModal open={isModalOpen} />
    </>
  );
};
export default Stories;
