import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  // eslint-disable-next-line import/named
  SelectChangeEvent,
} from "@mui/material";

import { Level } from "../../store/reducers/resumeReducer";

type Props = {
  selectedLevel: keyof typeof Level | "";
  handleChangeLevel(param: string): void;
};

const QualificationsResume = ({ selectedLevel, handleChangeLevel }: Props) => {
  const handleChangeLevelResume = (e: SelectChangeEvent) => {
    handleChangeLevel(e.target.value as string);
  };

  return (
    <>
      <FormControl>
        <h3>Квалификация</h3>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLevel}
          onChange={handleChangeLevelResume}
          input={<OutlinedInput />}
        >
          <MenuItem value={Level.Junior}>Junior</MenuItem>
          <MenuItem value={Level.Middle}>Middle</MenuItem>
          <MenuItem value={Level.Senior}>Senior</MenuItem>
          <MenuItem value={""}>Clear</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default QualificationsResume;
