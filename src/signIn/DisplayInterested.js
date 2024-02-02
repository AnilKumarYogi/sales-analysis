import React from "react";

const DisplayInterested = ({
  startup,
  approvedUsers,
  handleApprovedUsers,
  index,
}) => {
  const companyName = startup.companyName;
  const interested = startup.interestShownBy;

  const handleClickApprove = (element) => {
    if (!approvedUsers[index].includes(element)) {
      const data = [...approvedUsers[index], element];
      const updatedApprovedUsers = [...approvedUsers];
      updatedApprovedUsers[index] = data;
      handleApprovedUsers(updatedApprovedUsers);
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

        <h5>Approved Investors</h5>
        <ul>
          {approvedUsers[index].map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayInterested;
