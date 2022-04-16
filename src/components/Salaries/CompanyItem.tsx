import React from "react";

export const CompanyItem = ({ company, handlePlus, handleMinus }: any) => {
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
