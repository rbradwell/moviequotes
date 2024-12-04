import React from "react";
import ActorQuoteContainer from "./ActorQuoteContainer";

const List = ({ quotes, selectedQuotes, handleQuoteClick }) => {
  return (
    <section>
      {quotes.map((quote) => {
        return (
          <ActorQuoteContainer
            key={quote.id}
            isSelected={selectedQuotes.includes(quote.id)}
            {...quote}
            onClick={() => handleQuoteClick(quote.id)}
          />
        );
      })}
    </section>
  );
};

export default List;
