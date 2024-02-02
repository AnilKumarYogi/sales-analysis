import React from "react";
import axios from "axios";
import PlotChart from "../Chart/PlotChart";
import DisplayInterested from "./DisplayInterested";
const Startup = ({
  // handleFileChange,
  // handleSalesData,
  // salesData,
  // selectedFile,
  startupUploadStates,
  handleStartupUploadStates,
  globalData,
  approvedUsers,
  handleApprovedUsers,
  loginId,
}) => {
  const handleFileUpload = async (index) => {
    const formData = new FormData();
    formData.append("file", startupUploadStates[index].selectedFile);

    try {
      const response = await axios.post(
        "https://fundrev-app.onrender.com/upload",
        formData
      );
      const updatedstartupUploadStates = [...startupUploadStates];
      updatedstartupUploadStates[index].salesData = response.data.data;
      handleStartupUploadStates(updatedstartupUploadStates);
      // handleSalesData(response.data.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = (e, index) => {
    const updatedstartupUploadStates = [...startupUploadStates];
    // console.log("anile->", e);
    // console.log("anilindex->", index);
    const file = e.target.files[0];
    updatedstartupUploadStates[index].selectedFile = file;
    handleStartupUploadStates(updatedstartupUploadStates);
  };

  const startupData = globalData.startupData;
  return (
    <div>
      <h4>LoginId: {loginId}</h4>
      {startupData.length > 0 &&
        startupData.map((startup, index) => {
          if (startup.companyName === loginId) {
            return (
              <div>
                <DisplayInterested
                  key={index}
                  startup={startup}
                  approvedUsers={approvedUsers}
                  handleApprovedUsers={handleApprovedUsers}
                />
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, index)}
                />
                <button onClick={() => handleFileUpload(index)}>
                  Upload File
                </button>
                <br />
                <br />
                <PlotChart salesData={startupUploadStates[index].salesData} />
              </div>
            );
          }
          return null;
        })}

      {/* <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      <br />
      <br />
      <PlotChart salesData={salesData} /> */}
    </div>
  );
};
export default Startup;
