import React from "react";
import { useState } from "react";

const StartupCard = ({ companyName, businessDescription }) => {
  const [isInterested, setIsInterested] = useState(false);
  const [countInterest, setcountInterest] = useState(0);

  const handleInterestedClick = () => {
    isInterested
      ? setcountInterest(countInterest - 1)
      : setcountInterest(countInterest + 1);
    setIsInterested(!isInterested);
  };

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
      <p>Interested Investors: {countInterest}</p>
      <button onClick={handleInterestedClick}>
        {isInterested ? "Not Interested" : "Interested"}
      </button>
    </div>
  );
};

export default StartupCard;
