import "../styles/blog.css";
import ViewHeader from "../components/ViewHeader";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../axios";
import {EllipsisSpinner} from '../components/LoadingSpinners'

const Projects = () => {

  //after render scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
//state declarations
  const [projects, setProjects] = useState(null);

  //call hooks
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await api.get("projects");
        setProjects(response.data);
      } catch (err) {}
    };
    fetchAllProjects();
  }, []);

  

    return (
      <React.Fragment>
        <ViewHeader title="Projects"/>
        <div className="wrapper blog">
        {(projects==null)  ?   <EllipsisSpinner /> :
            <div className="flex-container">
                {projects.map((item) => (
                <Link key={item.id} to={`/projects/${item.id}`}>
                    <BlogCard blogObject={item} />
                </Link>
                ))}
            </div>
        }
        </div>
      </React.Fragment>
  );
};

export default Projects;
