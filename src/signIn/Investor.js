import StartupCard from "./StartupCard";
import PlotChart from "../Chart/PlotChart";
const Investor = ({
  globalData,
  handleGlobalData,
  loginId,
  salesData,
  approvedUsers,
}) => {
  const startupData = globalData.startupData;
  // const updateInterestedInvestors = ()=>{

  // };
  return (
    <div>
      <h1>Investor Page</h1>
      <h4>LoginId: {loginId}</h4>
      {startupData.length > 0 &&
        startupData.map((startup, index) => (
          <StartupCard
            key={index}
            idx={index}
            startup={startup}
            loginId={loginId}
            globalData={globalData}
            handleGlobalData={handleGlobalData}
          />
        ))}
      {approvedUsers.includes(loginId) ? (
        <PlotChart salesData={salesData} />
      ) : null}
    </div>
  );
};
export default Investor;
