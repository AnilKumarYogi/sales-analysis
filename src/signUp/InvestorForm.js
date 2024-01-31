// InvestorForm.js
import React, { useState } from "react";

const InvestorForm = ({ onSignUp }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Handle investor sign-up logic here
    // console.log("Investor signed up:", { userId, password });
    // Handle investor sign-up logic here
    const investorData = { userId, password };
    onSignUp(investorData);
    // Clear form fields
    setUserId("");
    setPassword("");
  };

  return (
    <div>
      <h2>Investor Sign Up</h2>
      <label>User ID:</label>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default InvestorForm;
