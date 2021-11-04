import { Link } from "react-router-dom";
import "../styles/eventsCard.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";

const Events = ({ date, month, day, title, description, image }) => {
  return (
    <div className="events-card">
      <div className="datestamp">
        <div className="date">{date}</div>
        <div className="month">{month}</div>
        <div className="day">{day}</div>
      </div>

      <div className="events-text">
        <p className="title">{title}</p>
        <div class="event-text__location">
          <LocationOnIcon className="icons" fontSize="large"/>
          RIU <EventIcon className="icons" fontSize="large"/>
          Events
        </div>
        <p className="description">{description}</p>
        <Link to="#">Read More</Link>
      </div>

      <div className="events-image">
        <img src={image} alt="eventsimage" />
      </div>
    </div>
  );
};

export default Events;
