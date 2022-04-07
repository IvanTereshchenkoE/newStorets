import FormGroup from "@mui/material/FormGroup";

import SortByPrice from "./SortBySalary";
import Qualification from "./Qualification";
import FieldOfActivity from "./Fieldofactivity";
import SearchesValute from "./SearchesValute";
import ProfessionalSkill from "./Professionalskill";

import { Sitebar } from "../../styles/styled";
import { Level } from "../../types/jobs";

type Props = {
  selectedLevel: keyof typeof Level | "";
  selectedSkills: string[];
  handleChangeLevel(param: string): void;
  handleChangeSalary(param: number): void;
  handleChangeSkills(param: string[]): void;
  handleSelectActivity(value: string[]): void;
};

function SidebarJob({
  selectedLevel,
  selectedSkills,
  handleChangeLevel,
  handleChangeSalary,
  handleChangeSkills,
  handleSelectActivity,
}: Props) {
  return (
    <>
      <Sitebar>
        <FormGroup>
          <FieldOfActivity
            handleSelectActivity={handleSelectActivity}
          ></FieldOfActivity>
          <Qualification
            selectedLevel={selectedLevel}
            handleChangeLevel={handleChangeLevel}
          ></Qualification>
          <ProfessionalSkill
            selectedSkills={selectedSkills}
            handleChangeSkills={handleChangeSkills}
          ></ProfessionalSkill>
          <SortByPrice handleChangeSalary={handleChangeSalary}></SortByPrice>
          <SearchesValute></SearchesValute>
        </FormGroup>
      </Sitebar>
    </>
  );
}

export default SidebarJob;
