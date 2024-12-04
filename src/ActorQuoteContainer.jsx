const ActorQuoteContainer = ({
  image,
  quote,
  actor,
  title,
  isSelected,
  onClick,
}) => {
  return (
    <article
      className="info"
      onClick={onClick}
      style={{
        cursor: "pointer",
        padding: "5px",
        border: isSelected ? "1px solid #a21caf" : "1px solid #ccc",
      }}
    >
      <img src={`./Assets/${image}`} alt={actor} className="img" />
      <div>
        <h4>Actor: {actor}</h4>
        <p>Movie: {title}</p>
        <p>
          Quote: <strong>{quote}</strong>
        </p>
      </div>
    </article>
  );
};
export default ActorQuoteContainer;
