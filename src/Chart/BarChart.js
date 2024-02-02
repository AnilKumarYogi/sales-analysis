import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Histogram = ({ data }) => {
  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="Month"
        label={{ value: "Months", position: "insideBottom", offset: -5 }}
      />
      <YAxis label={{ value: "Sales", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Sales" fill="#8884d8" />
    </BarChart>
  );
};

export default Histogram;
