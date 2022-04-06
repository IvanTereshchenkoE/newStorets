import JobsList from "../components/JobsComponent/JobsList";
import SearchJobs from "../components/JobsComponent/SearchJobs";
import SortSearch from "../components/JobsComponent/SortSearch";
import Layout from "../components/Layout/Layout";
import SidebarJob from "../components/SidebarJobsComponents/SidebarJob";
import useJobs from "../hooks/useJobs";
import { Content, Main, SearchPanel } from "../styles/styled";

function Joblist() {
  const {
    search,
    handleChangeLevel,
    handleChangeSalary,
    handleChangeSkills,
    handleSelectActivity,
  } = useJobs();
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
          <SidebarJob
            selectedLevel={search.level}
            selectedSkills={search.skills}
            handleSelectActivity={handleSelectActivity}
            handleChangeLevel={handleChangeLevel}
            handleChangeSalary={handleChangeSalary}
            handleChangeSkills={handleChangeSkills}
          />
        </Content>
      </Layout>
    </>
  );
}

export default Joblist;
