import "../styles/aboutUs.css";
import { useEffect } from "react";
import ViewHeader from "../components/ViewHeader";
import React from "react";
const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="about">
      <ViewHeader isClipless={true} />

      <div className="about-box">
        <h1>About RIU</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). It is a
          long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </p>
      </div>

      <div className="motto-box flex-container">
        <div className="motto-card">
          <img src="./images/mission.png" alt="mission" />
          <h1>Lorem Ipsum</h1>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>

        <div className="motto-card">
          <img src="./images/mission.png" alt="mission" />
          <h1>Lorem Ipsum</h1>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>

        <div className="motto-card">
          <img src="./images/mission.png" alt="mission" />
          <h1>Lorem Ipsum</h1>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>

        <div className="motto-card">
          <img src="./images/mission.png" alt="mission" />
          <h1>Lorem Ipsum</h1>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>
      </div>

      <div className="descriptive-box">
        
        <div className="descriptive-card">
          <img
            className="descriptive-image"
            src="./images/about.jpg"
            alt="about"
          />

          <div className="descriptive-text">
            <h2>Lorem ipsum dolor sit </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
              amet volutpat consequat mauris nunc congue. Augue ut lectus arcu
              bibendum at varius vel pharetra. Metus aliquam eleifend mi in. Eu
              tincidunt tortor aliquam nulla facilisi cras fermentum odio. Nulla
              facilisi morbi tempus iaculis urna. Interdum posuere lorem ipsum
              dolor sit amet consectetur adipiscing. Sed adipiscing diam donec
              adipiscing tristique risus nec feugiat in. Proin sed libero enim
              sed faucibus turpis in eu mi. Elit ullamcorper dignissim cras
              tincidunt lobortis feugiat. Vitae aliquet nec ullamcorper sit amet
              risus nullam eget. Volutpat maecenas volutpat blandit aliquam
              etiam erat. Amet facilisis magna etiam tempor orci. Donec massa
              sapien faucibus et molestie ac feugiat.
            </p>
          </div>
        </div>

        <div className="descriptive-card">
          <img
            className="descriptive-image"
            src="./images/about.jpg"
            alt="about"
          />

          <div className="descriptive-text">
            <h2>Lorem ipsum dolor sit </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
              amet volutpat consequat mauris nunc congue. Augue ut lectus arcu
              bibendum at varius vel pharetra. Metus aliquam eleifend mi in. Eu
              tincidunt tortor aliquam nulla facilisi cras fermentum odio. Nulla
              facilisi morbi tempus iaculis urna. Interdum posuere lorem ipsum
              dolor sit amet consectetur adipiscing. Sed adipiscing diam donec
              adipiscing tristique risus nec feugiat in. Proin sed libero enim
              sed faucibus turpis in eu mi. Elit ullamcorper dignissim cras
              tincidunt lobortis feugiat. Vitae aliquet nec ullamcorper sit amet
              risus nullam eget. Volutpat maecenas volutpat blandit aliquam
              etiam erat. Amet facilisis magna etiam tempor orci. Donec massa
              sapien faucibus et molestie ac feugiat.
            </p>
          </div>
        </div>

        <div className="descriptive-card">
          <img
            className="descriptive-image"
            src="./images/about.jpg"
            alt="about"
          />

          <div className="descriptive-text">
            <h2>Lorem ipsum dolor sit </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
              amet volutpat consequat mauris nunc congue. Augue ut lectus arcu
              bibendum at varius vel pharetra. Metus aliquam eleifend mi in. Eu
              tincidunt tortor aliquam nulla facilisi cras fermentum odio. Nulla
              facilisi morbi tempus iaculis urna. Interdum posuere lorem ipsum
              dolor sit amet consectetur adipiscing. Sed adipiscing diam donec
              adipiscing tristique risus nec feugiat in. Proin sed libero enim
              sed faucibus turpis in eu mi. Elit ullamcorper dignissim cras
              tincidunt lobortis feugiat. Vitae aliquet nec ullamcorper sit amet
              risus nullam eget. Volutpat maecenas volutpat blandit aliquam
              etiam erat. Amet facilisis magna etiam tempor orci. Donec massa
              sapien faucibus et molestie ac feugiat.
            </p>
          </div>
        </div>

        <div className="descriptive-card">
          <img
            className="descriptive-image"
            src="./images/about.jpg"
            alt="about"
          />

          <div className="descriptive-text">
            <h2>Lorem ipsum dolor sit </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
              amet volutpat consequat mauris nunc congue. Augue ut lectus arcu
              bibendum at varius vel pharetra. Metus aliquam eleifend mi in. Eu
              tincidunt tortor aliquam nulla facilisi cras fermentum odio. Nulla
              facilisi morbi tempus iaculis urna. Interdum posuere lorem ipsum
              dolor sit amet consectetur adipiscing. Sed adipiscing diam donec
              adipiscing tristique risus nec feugiat in. Proin sed libero enim
              sed faucibus turpis in eu mi. Elit ullamcorper dignissim cras
              tincidunt lobortis feugiat. Vitae aliquet nec ullamcorper sit amet
              risus nullam eget. Volutpat maecenas volutpat blandit aliquam
              etiam erat. Amet facilisis magna etiam tempor orci. Donec massa
              sapien faucibus et molestie ac feugiat.
            </p>
          </div>
        </div>
      </div>

      <div className="team">
        <h1>The Team Behind RIU</h1>
        <div className="team-box flex-container">
          <div className="team-card">
            <div className="team-image">
              <img src="./images/suraj.png" alt="suraj" />
            </div>

            <hr />

            <div className="team-name-post">
              <h3>Suraj Paudel</h3>
              <p>Research Assistant</p>
            </div>

            <div className="team-hover">
              <p className="off-hover">Hover to learn more</p>
              <p className="on-hover">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src="./images/suraj.png" alt="suraj" />
            </div>

            <hr />

            <div className="team-name-post">
              <h3>Suraj Paudel</h3>
              <p>Research Assistant</p>
            </div>

            <div className="team-hover">
              <p className="off-hover">Hover to learn more</p>
              <p className="on-hover">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src="./images/suraj.png" alt="suraj" />
            </div>

            <hr />

            <div className="team-name-post">
              <h3>Suraj Paudel</h3>
              <p>Research Assistant</p>
            </div>

            <div className="team-hover">
              <p className="off-hover">Hover to learn more</p>
              <p className="on-hover">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;