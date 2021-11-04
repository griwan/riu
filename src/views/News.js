import "../styles/blog.css";
import ViewHeader from "../components/ViewHeader";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../axios";
import {EllipsisSpinner} from '../components/LoadingSpinners'

const News = () => {

  //after render scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
//state declarations
  const [news, setNews] = useState(null);

  //call hooks
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await api.get("news");
        setNews(response.data);
      } catch (err) {}
    };
    fetchAllBlogs();
  }, []);

  useEffect(() => {
    const portfolio = async () => {
      try {
        const response = await api.get("http://portfolio-api-kalyan.herokuapp.com/api/v1/index");
        console.log(response.data);
      } catch (err) {}
    };
    portfolio();
  }, []);

    return (
      <React.Fragment>
        <ViewHeader title="News"/>
        <div className="wrapper blog">
        {(news==null) ?  <EllipsisSpinner /> :

            <div className="flex-container">
                {news.map((item) => (
                <Link key={item.id} to={`/news/${item.id}`}>
                    <BlogCard blogObject={item} />
                </Link>
                ))}
            </div>
          } 
        </div>
      </React.Fragment>
  );
};

export default News;
