import FormGroup from "@mui/material/FormGroup";

import SortByPrice from "./SortByPrice";
import Fieldofactivity from "./Fieldofactivity";
import Qualification from "./Qualification";
import Professionalskill from "./Professionalskill";
import SearchesValute from "./SearchesValute";

import { Sitebar } from "../../styles/styled";

function SidebarJob() {
  return (
    <>
      <Sitebar>
        <FormGroup>
          <Fieldofactivity></Fieldofactivity>
          <Qualification></Qualification>
          <Professionalskill></Professionalskill>
          <SortByPrice></SortByPrice>
          <SearchesValute></SearchesValute>
        </FormGroup>
      </Sitebar>
    </>
  );
}

export default SidebarJob;
