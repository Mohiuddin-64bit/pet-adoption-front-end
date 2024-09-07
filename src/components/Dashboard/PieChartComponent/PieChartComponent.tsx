import { PieChart } from "@mui/x-charts";
import React from "react";

const PieChartComponent = () => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Pets" },
            { id: 1, value: 15, label: "Adoption" },
            { id: 2, value: 20, label: "User" },
          ],
        },
      ]}
      width={400}
      height={290}
      
    />
  );
};

export default PieChartComponent;
