import React from "react";
import { Companies } from "./ChartPieCompany";

type Props = {
  company: Companies;
  handlePlus(value: string): void;
  handleMinus(value: string): void;
};

export const CompanyItem = ({ company, handlePlus, handleMinus }: Props) => {
  const [disabled, setDisabled] = React.useState(false);

  return (
    <p>
      {company.name}
      <button
        disabled={disabled}
        onClick={() => {
          handlePlus(company.name);
          setDisabled(true);
        }}
      >
        Like
      </button>
      <button
        disabled={disabled}
        onClick={() => {
          handleMinus(company.name);
          setDisabled(true);
        }}
      >
        Dislike
      </button>
    </p>
  );
};
