import { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import { getGraphs } from "../../API/quires";

export default function ChartSalary() {
  const [salaryMonth, setSalaryMonth] = useState([]);
  useEffect(() => {
    getGraphs().then((res) => setSalaryMonth(res.data.salary_medium_per_month));
  }, []);
  const data = [
    { month: "January", salary: 3 },
    { month: "February", salary: 4 },
    { month: "March", salary: 3.5 },
    { month: "April", salary: 5 },
    { month: "May", salary: 4.9 },
    { month: "June", salary: 6 },
    { month: "July", salary: 7 },
    { month: "August", salary: 9 },
    { month: "September", salary: 13 },
    { month: "October", salary: 13 },
    { month: "November", salary: 13 },
    { month: "December", salary: 13 },
  ];

  salaryMonth.map((item, index) => (data[index].salary = Math.ceil(item)));
  const config = {
    data,
    xField: "month",
    yField: "salary",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: true,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };
  return <Line {...config} />;
}
