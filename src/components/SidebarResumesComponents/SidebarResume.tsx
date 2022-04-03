import { FormGroup, SelectChangeEvent } from "@mui/material";
import { Level } from "../../store/reducers/resumeReducer";

import { Sitebar } from "../../styles/styled";
import ExpiriensResume from "./ExpiriensResume";
import QualificationsResume from "./QualificationsResume";
import TagsResume from "./TagsResume";

type Props = {
  selectedLevel: keyof typeof Level | "";
  selectedSkills: string[];
  handleChangeLevel(param: string): void;
  handleChangeSkills(param: string[]): void;
  handleChangeExpiriens(param: number): void;
};

function SidebarResume({
  selectedLevel,
  selectedSkills,
  handleChangeLevel,
  handleChangeSkills,
  handleChangeExpiriens,
}: Props) {
  const handleChangeTagsResume = (
    event: SelectChangeEvent<typeof selectedSkills>
  ) => {
    const {
      target: { value },
    } = event;

    handleChangeSkills(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeExpiriensResume = (e: SelectChangeEvent) => {
    handleChangeExpiriens(e.target.value as unknown as number);
  };

  const tags = ["react", "php", "typescript", "redux", "html", "css"];
  return (
    <>
      <Sitebar>
        <FormGroup>
          <QualificationsResume
            selectedLevel={selectedLevel}
            handleChangeLevel={handleChangeLevel}
          />

          <TagsResume
            selectedSkills={selectedSkills}
            handleChangeSkills={handleChangeSkills}
          ></TagsResume>
          <ExpiriensResume
            selectedLevel={selectedLevel}
            handleChangeExpiriens={handleChangeExpiriens}
          ></ExpiriensResume>
        </FormGroup>
      </Sitebar>
    </>
  );
}

export default SidebarResume;
