import React from "react";
// import { useState } from "react";
// import UploadCSV from "./UploadCSV";

const DisplayInterested = ({ startup, approvedUsers, handleApprovedUsers }) => {
  const companyName = startup.companyName;
  //   const businessDescription = startup.businessDescription;
  const interested = startup.interestShownBy;

  const handleClickApprove = (element) => {
    if (!approvedUsers.includes(element)) {
      // If not present, add it to the approvedUsers array
      handleApprovedUsers((approvedUsers) => [...approvedUsers, element]);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <h3>{companyName}</h3>
      {/* <p>{businessDescription}</p> */}
      <div>
        <h5>Interested Investors</h5>
        <ul>
          {interested.map((element, index) => (
            <li key={index}>
              {element}
              <button onClick={() => handleClickApprove(element)}>
                Approve
              </button>
            </li>
          ))}
        </ul>
        {/* <UploadCSV /> */}
      </div>
    </div>
  );
};

export default DisplayInterested;
