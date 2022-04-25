import { useState } from "react";
import { Pie } from "@ant-design/plots";
import { CompanyItem } from "./CompanyItem";

export type Companies = {
  name: string;
  value: number;
};

const ChartPieCompany = () => {
  const [companies, setCompanies] = useState([
    { name: "Twix", value: 27 },
    { name: "Netflix", value: 25 },
    { name: "Gogle", value: 18 },
    { name: "Microsoft", value: 15 },
    { name: "Pepsi", value: 10 },
    { name: "Yandex", value: 5 },
    { name: "Mail", value: 25 },
    { name: "Adidas", value: 25 },
    { name: "Nike", value: 25 },
    { name: "Puma", value: 25 },
  ]);

  const handlePlus = (name: string) => {
    setCompanies(
      companies.map(item => {
        if (item.name == name) {
          return {
            name: item.name,
            value: item.value + 1,
          };
        }
        return item;
      })
    );
  };

  const handleMinus = (name: string) => {
    setCompanies(
      companies.map(item => {
        if (item.name == name) {
          return {
            name: item.name,
            value: item.value - 1,
          };
        }
        return item;
      })
    );
  };

  const config = {
    appendPadding: 10,
    companies,
    angleField: "value",
    colorField: "name",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return (
    <>
      <Pie data={companies} {...config} />
      {companies.map(company => (
        <CompanyItem
          key={company.name}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
          company={company}
        ></CompanyItem>
      ))}
    </>
  );
};

export default ChartPieCompany;
