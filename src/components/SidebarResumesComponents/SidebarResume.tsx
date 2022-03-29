import {
  Checkbox,
  FormControl,
  FormGroup,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Level } from "../../store/reducers/resumeReducer";

import { Sitebar } from "../../styles/styled";

type Props = {
  selectedLevel: keyof typeof Level | "";
  selectedSkills: string[];
  handleChangeLevel(param: string): void;
  handleChangeSkills(param: string[]): void;
};

function SidebarResume({
  selectedLevel,
  selectedSkills,
  handleChangeLevel,
  handleChangeSkills,
}: Props) {
  const handleChangeLevelResume = (e: SelectChangeEvent) => {
    handleChangeLevel(e.target.value as string);
  };

  const handleChangeTagsResume = (
    event: SelectChangeEvent<typeof selectedSkills>
  ) => {
    const {
      target: { value },
    } = event;

    handleChangeSkills(typeof value === "string" ? value.split(",") : value);
  };

  const tags = ["react", "php", "typescript", "redux", "html", "css"];
  return (
    <>
      <Sitebar>
        <FormGroup>
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
          <FormControl>
            <h3>Професиональные навыки</h3>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={selectedSkills}
              onChange={handleChangeTagsResume}
              input={<OutlinedInput />}
              renderValue={selected => selected.join(", ")}
            >
              {tags.map(tag => (
                <MenuItem key={tag} value={tag}>
                  <Checkbox checked={selectedSkills.indexOf(tag) > -1} />
                  <ListItemText primary={tag} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGroup>
      </Sitebar>
    </>
  );
}

export default SidebarResume;
