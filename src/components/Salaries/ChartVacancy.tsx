import { useEffect, useState } from "react";
import { getGraphs } from "../../API/quires";

import { Column } from "@ant-design/plots";

type Data = {
  company: string;
  amount: number;
};

export default function ChartVacancy() {
  const [activityCount, setAactivityCount] = useState([
    { Backend: 0 },
    { Frontend: 0 },
    { Applications: 0 },
    { Testing: 0 },
    { Administration: 0 },
    { Design: 0 },
    { Management: 0 },
    { Marketing: 0 },
    { Analytics: 0 },
  ]);
  useEffect(() => {
    getGraphs().then(res => setAactivityCount(res.data.activity_count));
  }, []);
  let data: Data[] = [
    { company: "Backend", amount: 3 },
    { company: "Frontend", amount: 4 },
    { company: "Applications", amount: 3.5 },
    { company: "Testing", amount: 5 },
    { company: "Administration", amount: 4.9 },
    { company: "Design", amount: 6 },
    { company: "Management", amount: 7 },
    { company: "Marketing", amount: 9 },
    { company: "Analytics", amount: 13 },
  ];

  data.map((item, index) => {
    item.amount = Object.values(activityCount[index])[0];
  });
  const config = {
    data,
    xField: "company",
    yField: "amount",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#6bf95b",
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
  return <Column {...config} />;
}
