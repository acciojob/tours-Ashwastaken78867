import React, { useState } from "react";

const Tour = ({ tour, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id, name, info, image, price } = tour;

  const toggleInfo = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tour">
      <img src={image} alt={name} className="tour-image" />
      <h2>{name}</h2>
      <p>{isExpanded ? info : `${info.substring(0, 200)}...`}</p>
      <button onClick={toggleInfo}>
        {isExpanded ? "See less" : "Show more"}
      </button>
      <p>Price: ${price}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Tour;
