import "../styles/whatWeDoCard.css";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt="cardimage" />

      <div className="card-title">
        <p>{title}</p>
      </div>

      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
