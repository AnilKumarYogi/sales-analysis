import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import Home from "./Home/Home";
import Investor from "./signIn/Investor";
import Startup from "./signIn/Startup";
import { useState, useEffect } from "react";

function App() {
  const [globalData, setGlobalData] = useState({
    investorData: [],
    startupData: [],
  });

  const handleGlobalData = (newGlobalData) => {
    setGlobalData(newGlobalData);
    // console.log(globalData);
  };

  // useEffect(() => {
  //   console.log(globalData);
  // }, [globalData]);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signUp">sign Up</Link>
        </li>
        <li>
          <Link to="/signIn">sign In</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/signUp"
          element={
            <SignUp globalData={globalData} onDataUpdate={handleGlobalData} />
          }
        />
        <Route path="/signIn/" element={<SignIn globalData={globalData} />} />
        <Route
          path="/signIn/investor"
          element={<Investor globalData={globalData} />}
        />
        <Route path="/signIn/startup" element={<Startup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
