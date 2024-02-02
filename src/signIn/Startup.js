import React from "react";
import axios from "axios";
import PlotChart from "../Chart/PlotChart";
import DisplayInterested from "./DisplayInterested";
const Startup = ({
  handleFileChange,
  handleSalesData,
  salesData,
  selectedFile,
  globalData,
  approvedUsers,
  handleApprovedUsers,
}) => {
  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "https://fundrev-app.onrender.com/upload",
        formData
      );
      handleSalesData(response.data.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const startupData = globalData.startupData;
  return (
    <div>
      {startupData.length > 0 &&
        startupData.map((startup, index) => (
          <DisplayInterested
            key={index}
            startup={startup}
            approvedUsers={approvedUsers}
            handleApprovedUsers={handleApprovedUsers}
          />
        ))}

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      <br />
      <br />
      <PlotChart salesData={salesData} />
    </div>
  );
};
export default Startup;
