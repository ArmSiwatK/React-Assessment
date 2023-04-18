import NavBar from "../NavBar/NavBar";
import ProfilePic from "../res/profile.png";
import Bio from "./Bio";
import "./Owner.css";

const Owner = () => {

  return (
    <div>
      <NavBar />
      <div className="owner-container">
        <h1>Arm – Group E – 45</h1>
        <img src={ProfilePic} />
        <h2>Short Biography</h2>
        <Bio />
      </div>
    </div>
  )
}

export default Owner;