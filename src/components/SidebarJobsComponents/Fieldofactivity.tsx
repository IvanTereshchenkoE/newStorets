import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

function FieldOfActivity() {
  const handleChange = (event: any) => {
    {
      /*console.log(event.target.value);
  console.log(event.target.checked);*/
    }
  };

  const acts = [
    "Testing",
    "Frontend",
    "Design",
    "Marketing",
    "Administration",
    "Backend",
    "Analytics",
    "Management",
  ];

  return (
    <>
      <FormGroup>
        <strong>Сфера деятельности</strong>
      </FormGroup>
      {acts.map(act => (
        <FormControlLabel
          control={<Checkbox value={act} />}
          label={act}
          onChange={handleChange}
        />
      ))}
    </>
  );
}

export default FieldOfActivity;
