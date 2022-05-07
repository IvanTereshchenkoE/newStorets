import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  selectedSkills: string[];
  handleChangeSkills(param: string[]): void;
};

const TagsResume = ({ selectedSkills, handleChangeSkills }: Props) => {
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
          renderValue={(selected) => selected.join(", ")}
        >
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              <Checkbox checked={selectedSkills.indexOf(tag) > -1} />
              <ListItemText primary={tag} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default TagsResume;
