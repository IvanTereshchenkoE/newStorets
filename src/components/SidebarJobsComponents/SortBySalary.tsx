import * as React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

type Props = {
  handleChangeSalary(value: number): void;
};

export default function SortByPrice({ handleChangeSalary }: Props) {
  const [age, setAge] = React.useState();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleChangeSalary(Number(event.target.value));
  };

  return (
    <>
      <Box sx={{ maxWidth: 240 }}>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          value={age}
          onChange={handleChange}
        />
      </Box>
    </>
  );
}
