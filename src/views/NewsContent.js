import React, { useEffect, useState } from "react";
import "../styles/blog.css";
import api from "../axios";
import { EllipsisSpinner } from "../components/LoadingSpinners";
import Author from "../components/Blog/Author";
import ViewHeader from "../components/ViewHeader";

const NewsContent = ({ match }) => {

  //after render scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  //state declaration
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`news/${match.params.id}`);
        setBlogData(response.data);
        //console.log(response.data)
      } catch (err) {}
    };
    fetchBlog();
  }, [match.params.id]);

  if (blogData == null) return <EllipsisSpinner />;
  else
    return (
      <div className="body wrapper">
        <div className="header-container">
           <ViewHeader title={blogData.title.rendered} isClipless={true} bgImageURL={blogData.acf.feature_image.url}/>
          <div className="header-container__author">
             <Author  authorId={blogData.author} />
          </div> 
        </div>
        <div className="blog-container">



          {/* blog content */}
          <div className="blog-content">
            <div
              className="blog-content__data wp-content"
              dangerouslySetInnerHTML={{ __html: blogData.content.rendered }}
            ></div>
          </div>
        </div>
      </div>
    );
};

export default NewsContent;
