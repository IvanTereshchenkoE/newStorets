import SearchJobs from "../components/JobsComponent/SearchJobs";
import Layout from "../components/Layout/Layout";
import ResumesList from "../components/ResumeComponent/ResumesList";
import SidebarResume from "../components/SidebarResumesComponents/SidebarResume";
import { useResumes } from "../hooks/useResumes";
import { Content, Main } from "../styles/styled";

function Specialist() {
  const { list, search, handleChangeLevel, handleChangeSkills } = useResumes();
  return (
    <>
      <Layout>
        <Content>
          <Main>
            <SearchJobs></SearchJobs>
            <ResumesList></ResumesList>
          </Main>
          <SidebarResume
            selectedLevel={search.level}
            selectedSkills={search.tags}
            handleChangeLevel={handleChangeLevel}
            handleChangeSkills={handleChangeSkills}
          ></SidebarResume>
        </Content>
      </Layout>
    </>
  );
}

export default Specialist;
