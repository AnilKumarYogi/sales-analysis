import { ResponsiveContainer } from "recharts";
import Histogram from "./BarChart";
import { useState } from "react";
const PlotChart = ({ salesData }) => {
  const [activeGraph, setActiveGraph] = useState(0);
  const handleClickNext = () => {
    if (activeGraph + 1 < salesData.length) setActiveGraph(activeGraph + 1);
  };

  const handleClickPrev = () => {
    if (activeGraph - 1 > -1) setActiveGraph(activeGraph - 1);
  };

  return (
    <>
      {salesData.length > 0 ? (
        <div>
          <div style={{ textAlign: "right" }}>
            <button onClick={handleClickPrev}>prev year</button>
            <button style={{ marginRight: "500px" }} onClick={handleClickNext}>
              next year
            </button>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <Histogram data={salesData[activeGraph]} />
          </ResponsiveContainer>
        </div>
      ) : null}
    </>
  );
};
export default PlotChart;
