import "../styles/blog.css";
import ViewHeader from "../components/ViewHeader";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../axios";
import {EllipsisSpinner} from '../components/LoadingSpinners'


const Events = () => {

  //after render scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  //pagination variables
  var total_pages = null;
  var per_page = 6;

//state declarations
  const [events,setEvents] = useState(null);

  //call hooks
  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await api.get("events?per_page=2&page=2");
        console.log(response.headers)
        
        setEvents(response.data);
      } catch (err) {}
    };
    fetchAllEvents();
  }, []);

    return (
      <React.Fragment>
        <ViewHeader title="Events"/>
        <div className="wrapper blog">
          {(events==null) ?  <EllipsisSpinner /> : 
          <div className="flex-container">
            {events.map((item) => (
                <Link key={item.id} to={`/events/${item.id}`}>
                    <BlogCard blogObject={item} />
                </Link>
                ))}
          </div>
          
          }       
        </div>
      </React.Fragment>
  );
};

export default Events;
