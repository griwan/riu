import React, { useEffect, useState } from "react";
import "../styles/blog.css";
import api from "../axios";
import { EllipsisSpinner } from "../components/LoadingSpinners";
import Author from "../components/Blog/Author";
import ViewHeader from "../components/ViewHeader";

const ProjectContent = ({ match }) => {

  //after render scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  //state declaration
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`projects/${match.params.id}`);
        setProjectData(response.data);
        console.log(response.data)
      } catch (err) {}
    };
    fetchBlog();
  }, [match.params.id]);

  if (projectData == null) return <EllipsisSpinner />;
  else
    return (
      <div className="body wrapper">
        <div className="header-container">
           <ViewHeader title={projectData.title.rendered} isClipless={true} bgImageURL={projectData.acf.feature_image.url}/>
          <div className="header-container__author">  
             <Author  authorId={projectData.author} date={projectData.date}/>
          </div> 
        </div>
       

        {/* main blog content body */}
        <div className="blog-container">

          {/* blog content */}
          <div className="flex-container flex-column not-fluid">
            <div
              className="blog-content__data wp-content"
              dangerouslySetInnerHTML={{ __html: projectData.content.rendered }}
            ></div>
          </div>
        </div>
      </div>
    );
};

export default ProjectContent;
