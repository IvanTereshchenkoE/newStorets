import styled from "styled-components";

import SearchInput from "../components/SearchInput";
import SortSearch from "../components/SortSearch";
import Header from "../components/Header";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Link } from "react-router-dom";
import JobsList from "../components/JobsList";
import SortByPrice from "../components/SortByPrice";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
  padding: 0 12px;
  margin: 0 auto;
  max-width: 1100px;
  background-image: url(../image/1593729918_29-p-foni-s-veshchami-39.jpg);
`;

const SearchPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Main = styled.div`
  flex: 1 1;
  min-width: 0;
`;

function Joblist() {
  return (
    <>
      <Container>
        <Header />

        <Content>
          <Main>
            <SearchPanel>
              <SearchInput />
              <SortSearch />
            </SearchPanel>
            <JobsList></JobsList>
          </Main>
          <Sidebar></Sidebar>
        </Content>
      </Container>
    </>
  );
}

export default Joblist;
