import React from "react";
import { useState } from "react";
// import { ResponsiveContainer } from "recharts";
// import PlotChart from "../Chart/BarChart";
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

  // const [interestedInvestors, setInterestedInvestors] = useState(
  //   startup.interestShownBy
  // );
  const attributeToChange = "interestShownBy";

  const handleInterestedClick = () => {
    // const interestedInvestors = startup.interestShownBy;
    const old = globalData.startupData[idx];
    const oldinterestedInvestors = old.interestShownBy;
    if (!oldinterestedInvestors.includes(loginId)) {
      // setInterestedInvestors((interestedInvestors) => [
      //   ...interestedInvestors,
      //   loginId,
      // ]);
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
      // setInterestedInvestors((interestedInvestors) =>
      //   interestedInvestors.filter((item) => item !== loginId)
      // );
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
    // console.log("anil->", interestedInvestors);
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
