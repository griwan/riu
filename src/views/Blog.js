import "../styles/blog.css";
import ViewHeader from "../components/ViewHeader";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../axios";
import {EllipsisSpinner} from '../components/LoadingSpinners'

const Blog = () => {

  //after render scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

//state declarations
  const [blogs, setBlogs] = useState(null);

  //call hooks
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await api.get("posts");
        setBlogs(response.data);
      } catch (err) {}
    };
    fetchAllBlogs();
  }, []);

    return (
      <React.Fragment>
        <ViewHeader title="Blog"/>
        <div className="wrapper blog">
          {(blogs==null) ? <EllipsisSpinner /> :
            <div className="flex-container">
                {blogs.map((item) => (
                <Link key={item.id} to={`/blog/${item.id}`}>
                    <BlogCard blogObject={item} />
                </Link>
                ))}
            </div>
          }
        </div>
      </React.Fragment>
  );
};

export default Blog;
