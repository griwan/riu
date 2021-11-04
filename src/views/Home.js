import "../styles/home.css";
import api from "../axios";
import dataSlider from "../components/DataSlider";
import Card from "../components/WhatWeDoCard";
import Work from "../components/WorkCard";
import Button from "../components/ViewAllButton";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import News from "../components/NewsCard";
import Events from "../components/EventsCard";
import { EllipsisSpinner } from "../components/LoadingSpinners";

const Home = () => {

  //after render scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // variable declaration
  const [slideIndex, setSlideIndex] = useState(1);
  const [projects, setProjects] = useState(null);
  const [news, setNews] = useState(null);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

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

  //fetch projects
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
    <div className="home push-to-top">
      {/* Video Slider */}
      <div className="carousel-container">
        {dataSlider.map((obj, index) => {
          return (
            <video
              key={obj.id}
              className={
                slideIndex === index + 1
                  ? "video-slider active"
                  : "video-slider"
              }
              src={process.env.PUBLIC_URL + `/video/${index + 1}.mp4`}
              autoPlay
              muted
              loop
            ></video>
          );
        })}

        <div className="content">
          <h1>RIU</h1>
          <h3>Research and Innovation Unit</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            enim veritatis perferendis atque itaque id. Repellendus, saepe quae!
            Dolore ipsa consequuntur modi expedita distinctio, iste alias labore
            voluptatum facilis! Corporis quo aliquam doloribus suscipit quasi ad
            atque molestias iusto. Nam?
          </p>
          <Link to="/about-us">Read More</Link>
        </div>

        <div className="media-icons">
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
        </div>

        <div className="slider-navigation">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={
                slideIndex === index + 1 ? "nav-btn active" : "nav-btn"
              }
            ></div>
          ))}
        </div>
      </div>

      {/* What We Do Section */}
      <div className="what-we-do">
        <h1>What We Do</h1>

        <div className="flex-container not-fluid">
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />

          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
          <Card
            image="./images/research.jpg"
            title="Lorem, ipsum."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas asperiores laudantium minima, similique sunt!"
          />
        </div>
      </div>

      {/* Our Work Section */}
      <div className="our-work">
        <h1 class="title-font">Our Latest Projects</h1>

        <div className="view-button">
          <Button />
        </div>

        {projects === null ? (
          <EllipsisSpinner />
        ) : (
          projects.map((project, id) => {
            return (
              <Work
                key={id}
                id={project.id}
                title={project.title.rendered}
                description={project.excerpt.rendered}
                image={project.acf.feature_image.url}
              />
            );
          })
        )}
      </div>

      {/* News Section */}
      <div className="news">
        <h1>News</h1>

        <div className="view-button">
          <Button />
        </div>

        <div className="flex-container dark-bg">
          {news == null ? (
            <EllipsisSpinner isNotWhite={true}/>
          ) : (
            news.map((news, id) => {
              return (
                <Link to={`news/${news.id}`}>
                  <News
                    key={id}
                    id={news.id}
                    title={news.title.rendered}
                    description={news.excerpt.rendered}
                    image={news.acf.feature_image.url}
                  />
                </Link>
              );
            })
          )}
          {/* <News title="Lorem ipsum dolor sit." image="./images/news.jpg" />
          <News title="Lorem ipsum dolor sit." image="./images/news.jpg" />
          <News title="Lorem ipsum dolor sit." image="./images/news.jpg" /> */}
        </div>
      </div>

      {/* Events Section */}
      <div className="events">
        <h1>Events</h1>

        <div className="view-button">
          <Button />
        </div>

        <Events
          date="11"
          month="OCT 2021"
          day="Monday"
          title=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum placeat expedita eligendi. Libero, at molestiae!"
          image="./images/events.jpg"
        />

        <hr />

        <Events
          date="11"
          month="OCT,2021"
          day="Monday"
          title=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum placeat expedita eligendi. Libero, at molestiae!"
          image="./images/events.jpg"
        />

        <hr />

        <Events
          date="11"
          month="OCT,2021"
          day="Monday"
          title=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum placeat expedita eligendi. Libero, at molestiae!"
          image="./images/events.jpg"
        />
      </div>

      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="newsletter-description">
          <div className="newsletter-image">
            <ContactMailIcon className="newsletter-icon" fontSize="large" />
          </div>

          <div className="newsletter-text">
            <h2>Signup for Newsletter</h2>
            <p>Subscribe now and receive weekly newsletter with new updates</p>
          </div>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email..." />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default Home;
