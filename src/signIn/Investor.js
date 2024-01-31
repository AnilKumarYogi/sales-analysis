import StartupCard from "./StartupCard";
const Investor = ({ globalData }) => {
  const startupData = globalData.startupData;
  return (
    <div>
      <h1>Investor Page</h1>
      {startupData.length > 0 &&
        startupData.map((startup, index) => (
          <StartupCard
            key={index}
            companyName={startup.companyName}
            businessDescription={startup.businessDescription}
          />
        ))}
    </div>
  );
};
export default Investor;
