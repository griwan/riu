import "../styles/newsCard.css";

const News = ({ image, title,description }) => {
  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <img src={image} alt="newsimage" />

      <div className="news-card__description" dangerouslySetInnerHTML={{ __html: description}}>

      </div>

      </div>

      <div className="news-card__title">
        <p>{title}</p>
      </div>
      
    </div>
  );
};

export default News;
