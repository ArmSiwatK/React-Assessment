import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact="true">Home</NavLink>
        </li>
        <li>
          <NavLink to="/owner">Owner</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;