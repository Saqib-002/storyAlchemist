"use client";
import { getCreationsDataForThisMonth } from "@/lib/actions/creation.action";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
ChartJS.defaults.color = "#fff";
const UserChart = ({ userId }: any) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCreationsDataForThisMonth({ userId });
        setChartData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);
  if (!chartData || !chartData.consumedCredits) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="size-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
      </div>
    );
  }
  //   const { prices } = chartData;
  const data = {
    labels: chartData.allDays,
    datasets: [
      {
        label: "consumed Credits",
        data: chartData.consumedCredits,
        borderColor: "orange",
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };
  return (
    <div className="w-full  p-4 pt-12">
      <Line
        data={data}
        options={{
          scales: {
            yAxes: {
              grid: {
                color: "#ffffff",
              },
              ticks: {
                color: "white",
              },
            },
          },
        }}
        className=" !size-full"
        color="#fff"
      />
    </div>
  );
};

export default UserChart;
