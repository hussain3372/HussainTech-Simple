import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <hr />
      <div className="main">
        <div className="head">
          Hussain <span className="span">Tech</span>
        </div>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
