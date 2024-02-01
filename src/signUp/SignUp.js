import React from "react";
import InvestorForm from "./InvestorForm";
import StartupForm from "./StartupForm";

const SignUp = ({ globalData, onDataUpdate }) => {
  const handleInvestorSignUp = (data) => {
    const investorData = [...globalData.investorData, data];
    const startupData = globalData.startupData;
    const newGlobalData = { investorData, startupData };
    onDataUpdate(newGlobalData);
  };

  const handleStartupSignUp = (data) => {
    const startupData = [...globalData.startupData, data];
    const investorData = globalData.investorData;
    const newGlobalData = { investorData, startupData };
    onDataUpdate(newGlobalData);
  };

  return (
    <div>
      <InvestorForm onSignUp={handleInvestorSignUp} />
      <StartupForm onSignUp={handleStartupSignUp} />
    </div>
  );
};
export default SignUp;
