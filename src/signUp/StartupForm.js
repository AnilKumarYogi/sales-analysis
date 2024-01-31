// StartupForm.js
import React, { useState } from "react";

const StartupForm = ({ onSignUp }) => {
  const [companyName, setCompanyName] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [revenue, setRevenue] = useState("");

  const handleSignUp = () => {
    // Handle startup sign-up logic here
    // console.log("Startup signed up:", {
    //   companyName,
    //   businessDescription,
    //   revenue,
    // });
    const startupData = { companyName, businessDescription, revenue };
    onSignUp(startupData);
    // Clear form fields
    setCompanyName("");
    setBusinessDescription("");
    setRevenue("");
  };

  return (
    <div>
      <h2>Startup Sign Up</h2>
      <label>Company Name:</label>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <br />
      <label>Business Description:</label>
      <textarea
        value={businessDescription}
        onChange={(e) => setBusinessDescription(e.target.value)}
      />
      <br />
      <label>Revenue:</label>
      <input
        type="text"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
      />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default StartupForm;
