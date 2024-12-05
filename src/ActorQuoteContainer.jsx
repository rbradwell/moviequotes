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
        <h4>{actor}</h4>
        <p>{title}</p>
        <p>
          <strong>{quote}</strong>
        </p>
      </div>
    </article>
  );
};
export default ActorQuoteContainer;
