import * as React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

export default function SortByPrice() {
  const [age, setAge] = React.useState();
  const handleChange = (event: any): void => {
    setAge(event.target.value as any);
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
