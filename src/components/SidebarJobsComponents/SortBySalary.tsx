import * as React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { Level } from "../../types/jobs";

type Props = {
  handleChangeSalary(value: number): void;
};

export default function SortByPrice({ handleChangeSalary }: Props) {
  const [age, setAge] = React.useState();
  const handleChange = (event: any): void => {
    handleChangeSalary(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 240 }}>
      <InputLabel id="demo-simple-select-label">Price</InputLabel>
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={age}
        onChange={handleChange}
      />
    </Box>
  );
}
