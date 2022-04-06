import BasicPagination from "../components/JobsComponent/BasicPagination";
import Layout from "../components/Layout/Layout";
import ResumesList from "../components/ResumeComponent/ResumesList";
import SearchResumes from "../components/ResumeComponent/SearchResumes";
import SidebarResume from "../components/SidebarResumesComponents/SidebarResume";
import { useResumes } from "../hooks/useResumes";
import { Content, Main } from "../styles/styled";

function Specialist() {
  const {
    search,
    handleChangeLevel,
    handleChangeSkills,
    handleChangeExpiriens,
    handleChangePage,
  } = useResumes();
  return (
    <>
      <Layout>
        <Content>
          <Main>
            <SearchResumes></SearchResumes>
            <ResumesList></ResumesList>
            <BasicPagination
              handleChangePage={handleChangePage}
            ></BasicPagination>
          </Main>
          <SidebarResume
            selectedLevel={search.level}
            selectedSkills={search.tags}
            handleChangeLevel={handleChangeLevel}
            handleChangeSkills={handleChangeSkills}
            handleChangeExpiriens={handleChangeExpiriens}
          ></SidebarResume>
        </Content>
      </Layout>
    </>
  );
}

export default Specialist;
