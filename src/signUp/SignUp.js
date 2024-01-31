import React from "react";
import InvestorForm from "./InvestorForm";
import StartupForm from "./StartupForm";
import { useState } from "react";

const SignUp = ({ globalData, onDataUpdate }) => {
  const [investorData, setInvestorData] = useState(globalData.investorData);
  const [startupData, setStartupData] = useState(globalData.startupData);

  const handleInvestorSignUp = (data) => {
    // Handle investor sign-up logic here
    setInvestorData((prevData) => [...prevData, data]);
    const newGlobalData = { investorData, startupData };
    onDataUpdate(newGlobalData);
  };

  const handleStartupSignUp = (data) => {
    // Handle startup sign-up logic here
    setStartupData((prevData) => [...prevData, data]);
    const newGlobalData = { investorData, startupData };
    onDataUpdate(newGlobalData);
  };

  return (
    <div>
      {/* <h1>Sign Up Page</h1> */}
      <InvestorForm onSignUp={handleInvestorSignUp} />
      <StartupForm onSignUp={handleStartupSignUp} />

      {/* visulize */}
      {investorData.length > 0 && (
        <div>
          <h2>Investor Data</h2>
          {investorData.map((data, index) => (
            <div key={index}>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}

      {startupData.length > 0 && (
        <div>
          <h2>Startup Data</h2>
          {startupData.map((data, index) => (
            <div key={index}>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SignUp;
