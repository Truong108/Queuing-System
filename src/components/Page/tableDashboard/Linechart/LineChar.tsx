import { useEffect, useState } from "react";
import { Chart, LineElement } from "chart.js/auto";
import { Line } from 'react-chartjs-2';
Chart.register(LineElement);

interface DataMonth {
  day: string;
  amount: string;
}

interface DataSets {
  label: string;
  data: string[];
  tension: number;
  borderColor: string;
  pointBorderColor: string;
  backgroundColor: CanvasGradient;
  fill: boolean;
  spanGaps: boolean;
}

interface ChartData {
  labels: string[];
  datasets: DataSets[];
}
interface valueTuan {
  ngay1: string;
  ngay2: string;
  ngay3: string;
  ngay4: string;
  ngay5: string;
  ngay6: string;
  ngay7: string;
  ngay8: string;
  ngay9: string;
  ngay10: string;
  ngay11: string;
  ngay12: string;
}

const LineChart: React.FC<valueTuan> = ({
  ngay1,
  ngay2,
  ngay3,
  ngay4,
  ngay5,
  ngay6,
  ngay7,
  ngay8,
  ngay9,
  ngay10,
  ngay11,
  ngay12,
}) => {
  const dataList: DataMonth[] = [
  { day: "1", amount: '0'},
  { day: "2", amount: '1000' },
  { day: "3", amount: '2000'},
  { day: "4", amount: '3000' },
  { day: "5", amount: '4000' },
  { day: "6", amount: '5000' },
  { day: "7", amount: '6000' },
  { day: "8", amount: '7000' },
  { day: "9", amount: '8000' },
  { day: "10", amount: '9000' },
  { day: "11", amount: '10000' },
  { day: "12", amount: '11000' },
];
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        tension: 0.5,
        borderColor: "",
        pointBorderColor: "",
        backgroundColor: {} as CanvasGradient,
        fill: true,
        spanGaps: true,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: dataList.map((month) => month.day),
      datasets: [
        {
          label: "",
          data: dataList.map((month) => month.amount),
          tension: 0.5,
          borderColor: "#5185F7",
          pointBorderColor: "transparent",
          backgroundColor: createLinearGradient(),
          fill: true,
          spanGaps: true,
        },
      ],
    });
  }, []);

  const createLinearGradient = () => {
    const ctx = document.createElement("canvas").getContext("2d");
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 350);
      gradient.addColorStop(0, "#CEDDFF");
      gradient.addColorStop(1, "#CEDDFF00");
      return gradient;
    }
    return {} as CanvasGradient;
  };

  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 40,
        },
      },
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
  };

  return <Line width={1000} data={chartData} height={500} options={options} />;
}

export default LineChart;
