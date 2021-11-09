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

//for animations
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../styles/animations.css";

// gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  //after render scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // //for animations
  // const gsapProjects = document.querySelectorAll('.gsap-projects')

  // useEffect(()=>{
  //   gsapProjects.forEach((el)=>{
  //     gsapProjects.from(el,{
  //       duration:1,
  //       autoAlpha:1,
  //       ease:'none',
  //       ScrollTrigger:{
  //         trigger:el,
  //         start:'top center+=100',
  //         toggleActions:'play none none none',
  //         markers:true
  //       }
  //     })
  //   })
  // },[])
  
  // variable declaration
  const [slideIndex, setSlideIndex] = useState(1);
  const [projects, setProjects] = useState(null);
  const [news, setNews] = useState(null);
  const [events, setEvents] = useState(null)

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

  //fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get(`events?per_page=3`)
        setEvents(response.data)
      } catch (err) {}
    }
    fetchEvents()
  },[])

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
          Research and Innovation Unit(RIU) is an inhouse research unit of acem. It mainly focuses on minimizing the gap between industry and academia. Thus, it solves industry problems utilizing acem’s faculties, students and global experts.

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
            image="./images/industry.jpg"
            title="Industry research and consulting"
            description="Research and innovation unit works together with industry and academia for common goals that have been widely implemented in global modality as an effort to bridge the gap."
          />
          <Card
            image="./images/training.jpg"
            title="Trainings"
            description="To bridge the gap between industry and academia, RIU empowers students with multiple capacity building training programs."
          />
          <Card
            image="./images/learning.jpg"
            title="Project Based learning"
            description="Project based Learning with real time problem solving  enables students with the better learning capability. RIU provides the environment for Project based Learning."
          />

          <Card
            image="./images/supervision.jpg"
            title="Project Supervision"
            description="Having a global network of experts in multiple fields, RIU provides the best supervision for the project.
            "
          />
          <Card
            image="./images/prototyping.jpg"
            title="Prototyping"
            description="For innovation, there is a need for prototyping. RIU provides the environment and the resources for prototyping."
          />
          <Card
            image="./images/innovation.jpg"
            title="Innovation"
            description="For innovation, there is a need for prototyping. RIU provides the environment and the resources for prototyping."
          />
        </div>
      </div>

      {/* Our Work Section */}
      <div className="our-work">
        <h1 class="title-font">Latest Projects</h1>

        <div className="view-button">
          <Button routeTo='/projects' />
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
          <Button routeTo='/news'/>
        </div>

        <div className="flex-container">
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
        </div>
      </div>

      {/* Events Section */}
      <div className="events">
        <h1>Events</h1>

        <div className="view-button">
          <Button routeTo='/events'/>
        </div>

        {events == null ? (
            <EllipsisSpinner isNotWhite={true}/>
          ) : (
            events.map((events, id) => {
              return (
                  <Events
                    key={id}
                    id={events.id}
                    date={events.date}
                    title={events.title.rendered}
                    description={events.excerpt.rendered}
                    image={events.acf.feature_image.url}
                  />
              );
            })
          )}
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
