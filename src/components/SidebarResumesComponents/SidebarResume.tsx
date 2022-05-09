import { FormGroup } from "@mui/material";

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
