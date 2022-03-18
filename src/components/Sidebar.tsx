import styled from "styled-components";
import FormGroup from "@mui/material/FormGroup";

import SortByPrice from "../components/SortByPrice";
import Fieldofactivity from "./Fieldofactivity";
import Qualification from "./Qualification";
import Professionalskill from "./Professionalskill";
import SearchesValute from "./SearchesValute";

const Sitebar = styled.div`
  flex: none;
  order: 1;
  width: 300px;
`;

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
