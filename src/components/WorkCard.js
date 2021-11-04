import { Link } from "react-router-dom";
import "../styles/workCard.css";

const Work = ({id, image, title, description }) => {


  return (
    <div className="work-card">
      <div className="work-card__text">
        <div className="work-card__title">
          <p>{title}</p>
        </div>

        <div className="work-card__description" dangerouslySetInnerHTML={{ __html:  description }}>
        </div>

        <Link to={`/projects/${id}`}>View Project</Link>
      </div>

      <div className="work-card__image">
        <img src={image} alt="workimage" />
      </div>
      
    </div>
  );
};

export default Work;
