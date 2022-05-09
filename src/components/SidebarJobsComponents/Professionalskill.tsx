import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  // eslint-disable-next-line import/named
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  selectedSkills: string[];
  handleChangeSkills(param: string[]): void;
};

const ProfessionalSkill = ({ selectedSkills, handleChangeSkills }: Props) => {
  const handleChangeSkillsJob = (
    event: SelectChangeEvent<typeof selectedSkills>
  ) => {
    const {
      target: { value },
    } = event;

    handleChangeSkills(typeof value === "string" ? value.split(",") : value);
  };

  const skills = [
    "Ruby on Rails",
    "Typescript",
    "Html",
    "PHP",
    "Redux",
    "Mysql",
    "React",
    "Unix",
    "Ruby",
    "Css",
  ];
  return (
    <>
      <FormControl>
        <h3>Професиональные навыки</h3>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedSkills}
          onChange={handleChangeSkillsJob}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(", ")}
        >
          {skills.map((skill) => (
            <MenuItem key={skill} value={skill}>
              <Checkbox checked={selectedSkills.indexOf(skill) > -1} />
              <ListItemText primary={skill} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default ProfessionalSkill;
