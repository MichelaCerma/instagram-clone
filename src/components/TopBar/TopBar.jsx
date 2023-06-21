import "./TopBar.css";

import {
  InstagramLogo,
  CameraIcon,
  IGTVIcon,
  MessangerIcon,
} from "../../icons";

const TopBar = ({ setSection }) => {
  return (
    <div className="TopBar">
      <CameraIcon onClick={() => setSection("camera")} />
      <div className="TopBar_instagramLogo" onClick={() => setSection("home")}>
        <InstagramLogo />
      </div>
      <div className="TopBar__actions">
        <IGTVIcon />
        <MessangerIcon onClick={() => setSection("message")} />
      </div>
    </div>
  );
};
export default TopBar;
