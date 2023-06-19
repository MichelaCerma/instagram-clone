import "./TopBar.css";
import {
  InstragramLogo,
  CameraIcon,
  IGTVIcon,
  MessangerIcon,
} from "../../icons";
const TopBar = () => {
  return (
    <div className="TopBar">
      <CameraIcon />
      <div className="TopBar_instagramLogo">
        <InstragramLogo />
      </div>
      <div className="TopBar__actions">
        <IGTVIcon />
        <MessangerIcon />
      </div>
    </div>
  );
};
export default TopBar;
