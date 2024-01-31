// StartupCard.js
import React from "react";

const StartupCard = ({ companyName, businessDescription }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <h3>{companyName}</h3>
      <p>{businessDescription}</p>
    </div>
  );
};

export default StartupCard;
