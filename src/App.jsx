import { useState } from "react";
import data from "./quotes";
import List from "./List";
function App() {
  const [quotes, setQuotes] = useState(data);
  const [selectedQuotes, setSelectedQuotes] = useState([]);

  const handleQuoteClick = (id) => {
    setSelectedQuotes((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((quoteId) => quoteId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  return (
    <main>
      <section className="container">
        <h3>Fun Friday - movie quotes</h3>
        <p style={{ marginBottom: "20px" }}>
          Select the movie quotes that are correct.
        </p>
        <List
          quotes={quotes}
          selectedQuotes={selectedQuotes}
          handleQuoteClick={handleQuoteClick}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setSelectedQuotes([])}
          >
            Reset
          </button>
          <button
            type="button"
            className="btn btn-block"
            onClick={() => alert(selectedQuotes.join(","))}
            disabled={selectedQuotes.length == 0}
          >
            Submit
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
