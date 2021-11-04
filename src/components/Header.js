import { Link,NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/header.css";
import ProgressBar from "./ProgressBar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  //change header background
  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };


  window.addEventListener("scroll", changeBackground);

  return (
    <div className={header ? "header active" : "header"}>
      <ProgressBar />
      <div className="header-inner">
      <Link to="#">
        <img className="header_logo" src="images/static/logo-small.png" alt="RIU logo" />
      </Link>

      <div className="menu-btn"></div>

      <div className={showMenu ? "header__nav active" : "header__nav"}>
        <div className="header__options">
          <NavLink exact={true} to="/" activeClassName="nav-active"   onClick={() => setShowMenu(false)}>
                Home
          </NavLink>
          <NavLink  to="/projects" activeClassName="nav-active" onClick={() => setShowMenu(false)}>
                Projects
          </NavLink>
          <NavLink to="/news" activeClassName="nav-active" onClick={() => setShowMenu(false)}>
                News
          </NavLink>
          <NavLink to="/events" activeClassName="nav-active" onClick={() => setShowMenu(false)}>
               Events
          </NavLink>
          <NavLink  to="/blog" activeClassName="nav-active" onClick={() => setShowMenu(false)}>
                Blog
          </NavLink>
          <NavLink exact={true} to="/about-us" activeClassName="nav-active" onClick={() => setShowMenu(false)}>
                About Us
          </NavLink>

         

          <Link
            to="#"
            className="close-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            <CloseIcon fontSize="large" />
          </Link>
        </div>
      </div>

      <div className="hamburger-menu">
          <MenuIcon fontSize="large" onClick={() => setShowMenu(!showMenu)}/>
      </div>
      

      </div>
    </div>
  );
};

export default Header;
