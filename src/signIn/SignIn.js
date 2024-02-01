import { Link } from "react-router-dom";
// import { useState } from "react";

const SignIn = ({
  globalData,
  loginId,
  handleLoginId,
  loginPassword,
  handleLoginPassword,
  loginMessage,
  handleLoginMessage,
}) => {
  // const [loginId, setloginId] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const [loginMessage, setLoginMessage] = useState("");

  const handleLoginClick = () => {
    const isLoginSuccessful = globalData.investorData.some(
      (user) => user.userId === loginId && user.password === loginPassword
    );
    if (isLoginSuccessful) {
      handleLoginMessage("Login successful!");
      // Perform any additional actions for a successful login
    } else {
      handleLoginMessage("Invalid login credentials. Please sign up first.");
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="text"
        value={loginId}
        onChange={(e) => handleLoginId(e.target.value)}
        placeholder="Enter userID"
        style={{ marginRight: "20px" }}
      />
      <input
        type="password"
        value={loginPassword}
        onChange={(e) => handleLoginPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={handleLoginClick}>login</button>
      <p>{loginMessage}</p>
      {loginMessage === "Login successful!" ? (
        <ul>
          <li>
            <Link to="/signIn/investor">Investor</Link>
          </li>
          <li>
            <Link to="/signIn/startup">Startup</Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
export default SignIn;
