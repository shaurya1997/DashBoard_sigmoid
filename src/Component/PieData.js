import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const PieData = () => {
  const { pieData } = useSelector((state) => state.dashData);
  let labels = [];
  let piePercent = [];
  let colorArray = [];

  let dynamicColors = function () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  pieData?.map((item) => {
    labels.push(item.advertiserId);
    piePercent.push(item.CM001_percent);
    colorArray.push(dynamicColors());
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Pie Chart",
        backgroundColor: colorArray,
        data: piePercent,
      },
    ],
  };
  return (
    <div className="pie">
      <p>Pie Chart</p>
      <div className="pie_inner">
        <Pie
          data={data}
          options={{
            title: {
              display: true,
              text: "Pie Chart",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                fontSize: 15,
                fontColor: "#000",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default PieData;
