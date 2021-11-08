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

      {/* About Us box at top */}
      <div className="about-box">
        <h1>About RIU</h1>
        <p>
        RIU is an inhouse research unit of acem. It mainly focuses on minimizing the gap between industry and academia. Thus, it solves industry problems utilizing acem’s faculties, students and national/international experts.

It plans to bring experts from different fields to work in industry projects. On one hand, students get an opportunity to work on real life problems that train them even before they complete their undergraduate and on other hand, industries get their problems solved from an academic perspective.

To achieve this goal, RIU trains students on both technical and non-technical skills. Since it is project based learning, students learn by doing.

        </p>
      </div>

      <div className="motto-box flex-container">
        {/* Our values container */}
        <div className="motto-card">
          <img src="./images/inspire.png" alt="mission" />
          <h1>Inspire</h1>
          <p>We are working on multidisciplinary projects to INSPIRE students
</p>
        </div>

        <div className="motto-card">
          <img src="./images/interact.png" alt="mission" />
          <h1>Interact</h1>
          <p>We are always open to INTERACT with students to hear their interests and tell about our work</p>
        </div>

        <div className="motto-card">
          <img src="./images/influence.png" alt="mission" />
          <h1>Influence</h1>
          <p>We can INFLUENCE students for projects so that they can start working right away</p>
        </div>

        <div className="motto-card">
          <img src="./images/iterate.png" alt="mission" />
          <h1>Iterate</h1>
          <p>We work as a team so students can always ITERATE their ideas</p>
        </div>
      </div>

      {/* Timeline  */}
      <div className="about-us-timeline">
        <h1>RIU Milestones</h1>

        <ul>
          <li>
          <div class="content">
        <h2>
          <time>February 2021</time>
        </h2>
        <p>Establishment of RIU
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>March 2021</time>
        </h2>
        <p>Bought 3d printer
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>March 2021</time>
        </h2>
        <p>Bought 3d printer
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>April 2021</time>
        </h2>
        <p>2 research intern  Hired
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>May 2021</time>
        </h2>
        <p>Worldlink customer churn project
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>June 2021</time>
        </h2>
        <p>3d printing assignment for Mission Oxygen Team to fight against COVID
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>June 2021</time>
        </h2>
        <p>Consulted UCIL(Udayapur Cement Industry Limited)
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>June 2021</time>
        </h2>
        <p>Applied for IKI grant Germany
</p>
      </div>
          </li>
          
          <li>
          <div class="content">
        <h2>
          <time>July 2021</time>
        </h2>
        <p>Approval of visiting lecturer to give lecture in ACEM
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>August 2021</time>
        </h2>
        <p>3d print assignment for RAN(Robotics Association of Nepal)
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>September 2021</time>
        </h2>
        <p>Submitted Hi-Tech Training Center application
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>October 2021</time>
        </h2>
        <p>International travel to Europe for International Partnering
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>October 2021</time>
        </h2>
        <p>Arrival of visiting lecturer on mathematics from germany
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>November 2021</time>
        </h2>
        <p>HPC introduced to RIU
</p>
      </div>
          </li>

          <li>
          <div class="content">
        <h2>
          <time>November 2021</time>
        </h2>
        <p>Drone assembled
</p>
      </div>
          </li>

         
        </ul>
      </div>

      {/* Description section */}
      <div className="descriptive-box">
        
        <div className="descriptive-card">
          <img
            className="descriptive-image"
            src="./images/3dprinting.jpg"
            alt="about"
          />

          <div className="descriptive-text">
            <h2>3D printing In ACEM</h2>
            <p>
            3D printing is an additive process whereby layers of material are built up to create a 3D part. This is the opposite of subtractive manufacturing processes, where a final design is cut from a larger block of material. As a result, 3D printing creates less material wastage.

With the vision to create a student empowering learning environment, Research and Innovation Unit(RIU),acem has started 3d printing right from April,2021. Visualizing the object in 3d form while learning would be the best thing for the students to capture the concept as well as to enhance their learning capacity. With major advantages of 3d printing like rapid prototyping,cost effective manufacturing process,flexibility, product testing, etc, the technology is rapidly used worldwide and in Nepal as well.
In the journey of 3d printing technology in acem, a couple of students did research on a 3d printing machine and learned to print the object. The printing process takes a little time according to the weight of the material as it is the additive process. They had the trial printing and learned new things in every test. Things that were new to them were asked to the experts. In the meantime, the students printed the Charlotte valve for the Mission Oxygen Team to help fight against the COVID .Multiple 3d printing assignments were done after that. Now, 3d printing in acem is totally run by the students.

            </p>
          </div>
        </div>

        <div className="descriptive-card">
          <img
            className="descriptive-image"
            src="./images/consulting.jpg"
            alt="about"
          />

          <div className="descriptive-text">
            <h2>Consultant for UCIL </h2>
            <p>
            The industry and academia working together for common goals have been a widely implemented modality globally however is a rare practice in Nepal. There are several underlying reasons like outdated curriculum, tight schedule, and lack of interest. As an effort to bridge the gap, a collaborative work between acem and Udayapur Cement Industry Limited was carried out. This case study presents the technical possibilities of enhancement and upscaling the production capacity of Udayapur Cement Industry Limited (UCIL). This work also dissects the industry-academia collaboration through the lenses of students, faculty members, researchers, college, and industry experts. 
The team carried out an assessment on Reinforced Suspension Preheater (RSP) to improve the overall thermal efficiency of the plant. The detailed research gave the best suited solution for the cement factory based on the current status of the plant. Along with the technical assessment, the team also proposed an optimum strategy to roll out the plan.

            </p>
          </div>
        </div>
      </div>

      <div className="team">
        <h1>The Team Behind RIU</h1>
        <div className="team-box flex-container">
          <div className="team-card">
            <div className="team-image">
              <img src="./images/sojan.png" alt="sojan" />
            </div>

            <hr />

            <div className="team-name-post">
              <h3>Sojan Prajapati</h3>
              <p>Project Executive</p>
            </div>

            <div className="team-hover">
              <p className="off-hover">Hover to learn more</p>
              <p className="on-hover">
                Completed Master's in Power Electronics from TUM, Germany
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
                Electronics Engineering from Tribhuvan University
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src="./images/alish.png" alt="alish" />
            </div>

            <hr />

            <div className="team-name-post">
              <h3>Alish Shrestha</h3>
              <p>Research Assistant</p>
            </div>

            <div className="team-hover">
              <p className="off-hover">Hover to learn more</p>
              <p className="on-hover">
              Computer Engineering from Tribhuvan University
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;