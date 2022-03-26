import JobsList from "../components/JobsComponent/JobsList";
import SearchInput from "../components/JobsComponent/SearchInput";
import SortSearch from "../components/JobsComponent/SortSearch";
import Layout from "../components/Layout/Layout";
import SidebarJob from "../components/SidebarJobComponents/SidebarJob";
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
          <SidebarJob />
        </Content>
      </Layout>
    </>
  );
}

export default Joblist;
