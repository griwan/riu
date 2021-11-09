import { Link } from "react-router-dom";
import "../styles/viewAllButton.css";

const Button = ({routeTo}) => {
  return (
    <div className="button">
      <Link to={`${routeTo}`}>View All</Link>
    </div>
  );
};

export default Button;
