import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Level } from "../../store/reducers/resumeReducer";

type Props = {
  selectedLevel: keyof typeof Level | "";
  handleChangeExpiriens(param: number): void;
};

const ExpiriensResume = ({ selectedLevel, handleChangeExpiriens }: Props) => {
  const handleChangeExpiriensResume = (e: SelectChangeEvent) => {
    handleChangeExpiriens(e.target.value as unknown as number);
  };
  return (
    <>
      <FormControl>
        <h3>Опыт работы</h3>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLevel}
          onChange={handleChangeExpiriensResume}
          input={<OutlinedInput />}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default ExpiriensResume;
