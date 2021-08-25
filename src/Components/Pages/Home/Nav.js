import logo from '../../../assets/logo.png';
import '../../../assets/css/styles.css';
import {Link,} from "react-router-dom";
function Navbar() {
  return (
    <div>
    <div className="Navbar">
      <div className="Img__container">
        <img src={logo} alt="Logo" className="Logo__app"/>
      </div>
      <ul className="NavList">
        <Link to="/">
          <li className="NavItem">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="NavItem">
            About
          </li>
        </Link>
        <Link to="/service">
          <li className="NavItem">
            Services
          </li>
        </Link>
        <Link to="/projects">
          <li className="NavItem">
            Project
          </li>
        </Link>
        <Link to="/blog">
          <li className="NavItem">
            Blog
          </li>
        </Link>
        <Link to="/contact">
          <li className="NavItem">
            Contact
          </li>
        </Link>
      </ul>
    </div>
    </div>
  );
}

export default Navbar;
