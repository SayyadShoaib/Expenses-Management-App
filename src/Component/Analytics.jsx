import { PieChart, Pie, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
function Analytics() {
  const data = useSelector((store) => {
    return store.data;
  });
  // const salary = {};

  // const AnalyticArray = [];

  // AnalyticArray = data.map((ele) => {
  //   if (ele.source === "salary") {
  //     salary = {};
  //   }
  // });

  return (
    <>
      <div>Analytics</div>
      {/* <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="Amount"
          nameKey="source"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Tooltip />
      </PieChart> */}
    </>
  );
}
export default Analytics;
