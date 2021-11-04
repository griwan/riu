import { Link } from "react-router-dom";
import "../styles/viewAllButton.css";

const Button = () => {
  return (
    <div className="button">
      <Link to="#">View All</Link>
    </div>
  );
};

export default Button;
