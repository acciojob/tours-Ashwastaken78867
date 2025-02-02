import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tours from the API
  useEffect(() => {
    fetch("API_URL") // Replace with the actual API URL
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tours:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div>
          <p>No tours left</p>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      ) : (
        <Tours tours={tours} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default App;
