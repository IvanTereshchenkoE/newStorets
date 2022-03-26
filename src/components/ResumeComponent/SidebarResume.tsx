import { FormGroup } from "@mui/material";
import { Sitebar } from "../../styles/styled";
import Fieldofactivity from "../SidebarJobComponents/Fieldofactivity";
import Professionalskill from "../SidebarJobComponents/Professionalskill";
import Qualification from "../SidebarJobComponents/Qualification";
import SearchesValute from "../SidebarJobComponents/SearchesValute";
import SortByPrice from "../SidebarJobComponents/SortByPrice";

function SidebarResume() {
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

export default SidebarResume;
