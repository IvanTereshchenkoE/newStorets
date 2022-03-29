import JobsList from "../components/JobsComponent/JobsList";
import SearchJobs from "../components/JobsComponent/SearchJobs";
import SortSearch from "../components/JobsComponent/SortSearch";
import Layout from "../components/Layout/Layout";
import SidebarJob from "../components/SidebarJobsComponents/SidebarJob";
import { Content, Main, SearchPanel } from "../styles/styled";

function Joblist() {
  return (
    <>
      <Layout>
        <Content>
          <Main>
            <SearchPanel>
              <SearchJobs />
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
