import FormGroup from "@mui/material/FormGroup";

import SortByPrice from "./SortByPrice";
import FieldOfActivity from "./FieldOfActivity";
import Qualification from "./Qualification";
import ProfessionalSkill from "./ProfessionalSkill";
import SearchesValute from "./SearchesValute";

import { Sitebar } from "../../styles/styled";
import { Level } from "../../types/jobs";

type Props = {
  selectedLevel: keyof typeof Level | "";
  handleChangeLevel(param: string): void;
};

function SidebarJob({ selectedLevel, handleChangeLevel }: Props) {
  return (
    <>
      <Sitebar>
        <FormGroup>
          <FieldOfActivity></FieldOfActivity>
          <Qualification
            selectedLevel={selectedLevel}
            handleChangeLevel={handleChangeLevel}
          ></Qualification>
          <ProfessionalSkill></ProfessionalSkill>
          <SortByPrice></SortByPrice>
          <SearchesValute></SearchesValute>
        </FormGroup>
      </Sitebar>
    </>
  );
}

export default SidebarJob;
