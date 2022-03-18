import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Input = styled.div`
  display: flex:
  flex-direction: row;
`;

export default function SearchesValute() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 80 }}>
      <Input>
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
      </Input>
      <FormControlLabel control={<Checkbox />} label="Указана" />
    </Box>
  );
}
