import { Link } from "react-router-dom";
import "../styles/eventsCard.css";
import 'moment-timezone';
import Moment from 'react-moment';


import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";

const Events = ({id, date, title, description, image }) => {
  return (
    <div className="events-card">
      <div className="datestamp">
        <div className="date"><Moment format="D" tz="Asia/Kathmandu" date={date} /></div>
        <div className="month"><Moment format="MMM" tz="Asia/Kathmandu" date={date} /></div>
        <div className="day"><Moment format="YYYY" tz="Asia/Kathmandu" date={date} /></div>
      </div>

      <div className="events-text">
        <p className="title">{title}</p>
        <div className="event-text__location">
          <LocationOnIcon className="icons" fontSize="large"/>
          RIU <EventIcon className="icons" fontSize="large"/>
          Events
        </div>
        <p className="description" dangerouslySetInnerHTML={{__html:description}}></p>
        <Link to={`events/${id}`}>Read More</Link>
      </div>

      <div className="events-image">
        <img src={image} alt="eventsimage" />
      </div>
    </div>
  );
};

export default Events;
