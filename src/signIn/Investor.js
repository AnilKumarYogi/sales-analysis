import StartupCard from "./StartupCard";
import PlotChart from "../Chart/PlotChart";
const Investor = ({
  globalData,
  handleGlobalData,
  loginId,
  approvedUsers,
  startupUploadStates,
}) => {
  const startupData = globalData.startupData;

  return (
    <div>
      <h1>Investor Page</h1>
      <h4>LoginId: {loginId}</h4>
      {startupData.length > 0 &&
        startupData.map((startup, index) => (
          <div>
            <StartupCard
              key={index}
              idx={index}
              startup={startup}
              loginId={loginId}
              globalData={globalData}
              handleGlobalData={handleGlobalData}
            />
            {approvedUsers[index].includes(loginId) ? (
              <PlotChart salesData={startupUploadStates[index].salesData} />
            ) : null}
          </div>
        ))}
      {/* {approvedUsers.includes(loginId) ? (
        <PlotChart salesData={salesData} />
      ) : null} */}
    </div>
  );
};
export default Investor;
