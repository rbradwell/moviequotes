import { useState, useEffect } from "react";
import List from "./List";
import axios from "axios";

const url = "http://127.0.0.1:8000/actorquotes/";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuotes, setSelectedQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await axios(url);
      console.log(response);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.response);
      setError(error);
    }
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      const quoteData = await fetchData();
      setQuotes(quoteData);
      setLoading(false);
    };
    fetchQuotes();
  }, []);

  const handleQuoteClick = (id) => {
    setSelectedQuotes((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((quoteId) => quoteId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  if (error) {
    return (
      <div style={{ color: "red", padding: "10px", border: "1px solid red" }}>
        <h3>Error</h3>
        <p>{error.message || error}</p>
      </div>
    );
  }

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </main>
  );
}

export default App;
