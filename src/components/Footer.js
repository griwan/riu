import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-head">
          <Link to="#">
            <img
              className="footer_logo"
              src={"./images/logo-small.png"}
              alt="logo"
            />
          </Link>

          <p>
            <LocationOnIcon /> <span>Kupondole,Lalitpur,Nepal</span>
          </p>

          <p>
            <CallIcon /> <span>+987456123 / 01-123456</span>
          </p>

          <p>
            <EmailIcon /> <span>riu@acem.edu.np</span>
          </p>
        </div>

        <div>
          <h4>Projects</h4>
          <ul>
            <li>
              <Link to="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="#">Lorem Ipsum</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>News</h4>
          <ul>
            <li>
              <Link to="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="#">Lorem Ipsum</Link>
            </li>
            <li>
              <Link to="#">Lorem Ipsum</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Projects</Link>
            </li>
            <li>
              <Link to="#">News</Link>
            </li>
            <li>
              <Link to="#">Vaccancy</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>riu.acem.edu.np | &copy; 2021, Developed by Aashish Rai and Kalyan Devkota</p>
        </div>

        <div className="footer-icons">
          <a href="#facebook">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="#twitter">
            {" "}
            <TwitterIcon fontSize="large" />
          </a>
          <a href="#maps">
            <GoogleIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
