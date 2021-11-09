import { Link } from "react-router-dom";
import api from "../axios";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import "../styles/footer.css";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
  const [projects, setProjects] = useState(null)
  const [news,setNews] = useState(null)

 
  //fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get(`projects?per_page=3`);
        setProjects(response.data);
      } catch (err) {}
    };
    fetchProjects();
  }, []);

  //fetch news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get(`news?per_page=3`);
        setNews(response.data);
      } catch (err) {}
    };
    fetchNews();
  }, []);

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-head">
          <Link to="/">
            <img
              className="footer_logo"
              src="http://riuacem.com/images/static/white-logo.png"
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
          {projects === null ? (
          "Loading ..."
        ) : (
          projects.map((project, id) => {
            return (
             <li key={id}>
              <Link to={`projects/${project.id}`}>{project.title.rendered}</Link>
               </li>
            );
          })
        )}
          </ul>
        </div>

        <div>
          <h4>News</h4>
          <ul>
          {news === null ? (
          "Loading ..."
        ) : (
          news.map((news, id) => {
            return (
             <li key={id}>
              <Link to={`news/${news.id}`}>{news.title.rendered}</Link>
               </li>
            );
          })
        )}
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>riu.acem.edu.np | &copy; 2021, Developed at RIU by Aashish Rai and Kalyan Devkota</p>
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
