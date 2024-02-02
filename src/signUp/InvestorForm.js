import React, { useState } from "react";

const InvestorForm = ({ onSignUp }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = () => {
    const investorData = { userId, password };
    onSignUp(investorData);
    setMessage(
      "SignUp Done!! Now you can signIn with this username and password."
    );
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
      <p>{message}</p>
    </div>
  );
};

export default InvestorForm;
