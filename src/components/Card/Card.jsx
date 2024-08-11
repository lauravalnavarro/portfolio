import './Card.css'; 

const Card = ({ image, title, description, link, className }) => {
  return (
    <div className={`project-card ${className}`}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Ver Más</a>
      </div>
    </div>
  );
};

export default Card;
