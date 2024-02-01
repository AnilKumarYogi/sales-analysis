import { Link, Route, Routes } from "react-router-dom";
import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import Home from "./Home/Home";
import Investor from "./signIn/Investor";
import Startup from "./signIn/Startup";
import { useState } from "react";

function App() {
  const [globalData, setGlobalData] = useState({
    investorData: [
      { userId: "anil", password: "yogi" },
      { userId: "dhiraj", password: "fundrev" },
    ],
    startupData: [
      {
        companyName: "Tesla, Inc.",
        businessDescription:
          "Tesla is known for designing and manufacturing electric vehicles (EVs), energy storage solutions, and renewable energy products. The company's mission is to accelerate the world's transition to sustainable energy.",
        revenue: "2.33TCr	",
      },
    ],
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [salesData, setSalesData] = useState([]);

  const [loginId, setloginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleGlobalData = (newGlobalData) => {
    setGlobalData(newGlobalData);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSalesData = (data) => {
    setSalesData(data);
  };

  const handleLoginId = (data) => {
    setloginId(data);
  };
  const handleLoginPassword = (data) => {
    setLoginPassword(data);
  };
  const handleLoginMessage = (data) => {
    setLoginMessage(data);
  };

  return (
    <div style={appContainer}>
      <nav style={navBar}>
        <ul style={navList}>
          <li style={navItem}>
            <Link to="/" style={navLink}>
              Home
            </Link>
          </li>
          <li style={navItem}>
            <Link to="/signUp" style={navLink}>
              Sign Up
            </Link>
          </li>
          <li style={navItem}>
            <Link to="/signIn" style={navLink}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/signUp"
          element={
            <SignUp globalData={globalData} onDataUpdate={handleGlobalData} />
          }
        />
        <Route
          path="/signIn/"
          element={
            <SignIn
              globalData={globalData}
              loginId={loginId}
              handleLoginId={handleLoginId}
              loginPassword={loginPassword}
              handleLoginPassword={handleLoginPassword}
              loginMessage={loginMessage}
              handleLoginMessage={handleLoginMessage}
            />
          }
        />
        <Route
          path="/signIn/investor"
          element={<Investor globalData={globalData} />}
        />
        <Route
          path="/signIn/startup"
          element={
            <Startup
              handleFileChange={handleFileChange}
              handleSalesData={handleSalesData}
              selectedFile={selectedFile}
              salesData={salesData}
            />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
const appContainer = {
  maxWidth: "800px",
  margin: "auto",
  padding: "20px",
};

const navBar = {
  backgroundColor: "#333",
  padding: "10px",
};

const navList = {
  listStyle: "none",
  padding: "0",
  margin: "0",
  display: "flex",
};

const navItem = {
  margin: "0 10px",
};

const navLink = {
  textDecoration: "none",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
};
export default App;
