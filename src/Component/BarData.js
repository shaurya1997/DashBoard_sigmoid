import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";

const BarData = (props) => {
  const { barData } = useSelector((state) => state.dashData);
  let label = [];
  let dataArray = [];

  barData &&
    barData.map((item) => {
      label.push(item.appSiteId);
      dataArray.push(item.impressions_offered);
    });

  const data = {
    labels: label,
    datasets: [
      {
        label: "Bar Chart",
        backgroundColor: "#EC932F",
        borderWidth: 1,
        data: dataArray,
      },
    ],
  };

  return (
    <div className="pie">
      <p>Bar Chart</p>
      <div className="pie_inner">
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            title: {
              display: true,
              text: "Bar Chart",
              fontSize: 16,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarData;
