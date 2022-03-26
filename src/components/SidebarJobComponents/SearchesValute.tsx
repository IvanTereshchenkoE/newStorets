import * as React from "react";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { InputValute } from "../../styles/styled";

export default function SearchesValute() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 80 }}>
      <InputValute>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Rub</MenuItem>
          <MenuItem value={20}>Dollars</MenuItem>
          <MenuItem value={30}>Eur</MenuItem>
          <MenuItem value={40}>Tng</MenuItem>
        </Select>
      </InputValute>
      <FormControlLabel control={<Checkbox />} label="Указана" />
    </Box>
  );
}