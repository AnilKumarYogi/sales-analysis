import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = ({
  globalData,
  loginId,
  handleLoginId,
  loginPassword,
  handleLoginPassword,
  loginMessage,
  handleLoginMessage,
  loginType,
  handleLoginType,
}) => {
  const [investorLogin, setinvestorLogin] = useState("");
  const [investorPasswordLogin, setinvestorPasswordLogin] = useState("");
  const [startupLogin, setStartupLogin] = useState("");
  const [startupPasswordLogin, setStartupPasswordLogin] = useState("");

  const handleLoginClick = () => {
    const isLoginSuccessful = globalData.investorData.some(
      (user) =>
        user.userId === investorLogin && user.password === investorPasswordLogin
    );
    if (isLoginSuccessful) {
      handleLoginMessage("Login successful!");
      handleLoginId(investorLogin);
      handleLoginPassword(investorPasswordLogin);
      handleLoginType(0);
    } else {
      handleLoginMessage("Invalid login credentials. Please sign up first.");
    }
  };

  const handleStartupLoginClick = () => {
    const isLoginSuccessful = globalData.startupData.some(
      (startup) =>
        startup.companyName === startupLogin &&
        startup.password === startupPasswordLogin
    );
    if (isLoginSuccessful) {
      handleLoginMessage("Login successful!");
      handleLoginId(startupLogin);
      handleLoginPassword(startupPasswordLogin);
      handleLoginType(1);
    } else {
      handleLoginMessage("Invalid login credentials. Please sign up first.");
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <input
        type="text"
        value={investorLogin}
        onChange={(e) => setinvestorLogin(e.target.value)}
        placeholder="Enter userID"
        style={{ marginRight: "20px" }}
      />
      <input
        type="password"
        value={investorPasswordLogin}
        onChange={(e) => setinvestorPasswordLogin(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={handleLoginClick}>Investor login</button>
      <br />
      <br />
      <input
        type="text"
        value={startupLogin}
        onChange={(e) => setStartupLogin(e.target.value)}
        placeholder="Enter Company Name"
        style={{ marginRight: "20px" }}
      />
      <input
        type="password"
        value={startupPasswordLogin}
        onChange={(e) => setStartupPasswordLogin(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={handleStartupLoginClick}>StartUp login</button>
      <p>{loginMessage}</p>
      {loginMessage === "Login successful!" ? (
        <div>
          <p> with loginId: {loginId}</p>
          {loginType === 1 ? <Link to="/signIn/startup">Startup</Link> : null}
          {loginType === 0 ? <Link to="/signIn/investor">Investor</Link> : null}
        </div>
      ) : null}
    </div>
  );
};
export default SignIn;
