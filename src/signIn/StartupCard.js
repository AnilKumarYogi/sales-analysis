import React from "react";
import { useState } from "react";
const StartupCard = ({
  idx,
  startup,
  loginId,
  globalData,
  handleGlobalData,
}) => {
  const [isInterested, setIsInterested] = useState(
    startup.interestShownBy.includes(loginId)
  );
  const [countInterest, setcountInterest] = useState(
    startup.interestShownBy.length
  );

  const attributeToChange = "interestShownBy";

  const handleInterestedClick = () => {
    const old = globalData.startupData[idx];
    const oldinterestedInvestors = old.interestShownBy;
    if (!oldinterestedInvestors.includes(loginId)) {
      setcountInterest(countInterest + 1);
      const upinterestedInvestors = (oldinterestedInvestors) => [
        ...oldinterestedInvestors,
        loginId,
      ];
      const data = {
        ...old,
        [attributeToChange]: upinterestedInvestors(oldinterestedInvestors),
      };

      const startupData = [
        ...globalData.startupData.slice(0, idx),
        data,
        ...globalData.startupData.slice(idx + 1),
      ];

      const investorData = globalData.investorData;
      const newGlobalData = { investorData, startupData };
      handleGlobalData(newGlobalData);
    } else {
      setcountInterest(countInterest - 1);
      const data = {
        ...old,
        [attributeToChange]: oldinterestedInvestors.filter(
          (item) => item !== loginId
        ),
      };

      const startupData = [
        ...globalData.startupData.slice(0, idx),
        data,
        ...globalData.startupData.slice(idx + 1),
      ];

      const investorData = globalData.investorData;
      const newGlobalData = { investorData, startupData };
      handleGlobalData(newGlobalData);
    }

    setIsInterested(!isInterested);
  };

  const companyName = startup.companyName;
  const businessDescription = startup.businessDescription;

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
