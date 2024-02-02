import React, { useState } from "react";

const StartupForm = ({ onSignUp }) => {
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [revenue, setRevenue] = useState("");
  const [message, setMessage] = useState("");

  const interestShownBy = [];
  const handleSignUp = () => {
    const startupData = {
      companyName,
      password,
      businessDescription,
      revenue,
      interestShownBy,
    };
    onSignUp(startupData);
    setMessage("SignUp Done for the StartUp!!");
    setCompanyName("");
    setBusinessDescription("");
    setRevenue("");
    setPassword("");
  };

  return (
    <div>
      <h2>Startup Sign Up</h2>
      <label>Company Name:</label>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        style={{ marginLeft: "35px" }}
      />
      <br />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginLeft: "75px" }}
      />
      <br />
      <br />
      <label>Business Description:</label>
      <textarea
        value={businessDescription}
        onChange={(e) => setBusinessDescription(e.target.value)}
      />
      <br />
      <br />
      <label>Revenue:</label>
      <input
        type="text"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
        style={{ marginLeft: "80px" }}
      />
      <br />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>{message}</p>
    </div>
  );
};

export default StartupForm;
