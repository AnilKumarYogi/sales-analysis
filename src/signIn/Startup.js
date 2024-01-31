import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResponsiveContainer } from "recharts";
import PlotChart from "../Chart/PlotChart";
// import PlotChart from "./PlotChart";
const Startup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [salesData, setSalesData] = useState([]);
  const [activeGraph, setActiveGraph] = useState(0);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/upload",
        formData
      );

      console.log("anil->", response.data.data);
      setSalesData(response.data.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleClickNext = () => {
    if (activeGraph + 1 < salesData.length) setActiveGraph(activeGraph + 1);
  };

  const handleClickPrev = () => {
    if (activeGraph - 1 > -1) setActiveGraph(activeGraph - 1);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      <br />
      <br />

      {salesData.length > 0 ? (
        <div>
          <div style={{ textAlign: "right" }}>
            <button onClick={handleClickPrev}>prev year</button>
            <button style={{ marginRight: "500px" }} onClick={handleClickNext}>
              next year
            </button>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <PlotChart data={salesData[activeGraph]} />
          </ResponsiveContainer>
        </div>
      ) : null}
    </div>
  );
};
export default Startup;
