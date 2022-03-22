import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Fieldofactivity() {
  return (
    <>
      <FormGroup>
        <strong>Сфера деятельности</strong>
        <FormControlLabel control={<Checkbox />} label="Frontend" />
        <FormControlLabel control={<Checkbox />} label="Backend" />
        <FormControlLabel control={<Checkbox />} label="Applications" />
        <FormControlLabel control={<Checkbox />} label="Software" />
        <FormControlLabel control={<Checkbox />} label="Testing" />
        <FormControlLabel control={<Checkbox />} label="Administration" />
      </FormGroup>
    </>
  );
}

export default Fieldofactivity;
