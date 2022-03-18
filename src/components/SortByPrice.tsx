import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

const Input = styled.div`
  display: flex:
  flex-direction: row;
`;

export default function SortByPrice() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 240 }}>
      <InputLabel id="demo-simple-select-label">Price</InputLabel>
      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
    </Box>
  );
}
