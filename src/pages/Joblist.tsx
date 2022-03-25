import SearchInput from "../components/SearchInput";
import SortSearch from "../components/SortSearch";
import Sidebar from "../components/Sidebar";
import JobsList from "../components/JobsList";
import Layout from "../components/Layout/Layout";
import { Content, Main, SearchPanel } from "../styles/styled";

function Joblist() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default Joblist;
