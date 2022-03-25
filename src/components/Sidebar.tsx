import FormGroup from "@mui/material/FormGroup";

import SortByPrice from "./SidebarComponents/SortByPrice";
import Fieldofactivity from "./SidebarComponents/Fieldofactivity";
import Qualification from "./SidebarComponents/Qualification";
import Professionalskill from "./SidebarComponents/Professionalskill";
import SearchesValute from "./SidebarComponents/SearchesValute";

import { Sitebar } from "../styles/styled";

function Sidebar() {
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

export default Sidebar;