import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, onDelete }) => {
  return (
    <div className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tours;
