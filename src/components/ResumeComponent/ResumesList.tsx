import styled from "styled-components";

import { useResumes } from "../../hooks/useResumes";
import ResumeCard from "./ResumeCard";

const List = styled.div``;

const ResumesList = () => {
  const { list } = useResumes();
  return (
    <List>
      {list.map((resume) => (
        <ResumeCard
          key={resume.id}
          id={resume.id}
          name={resume.name}
          experience={resume.experience}
          level={resume.level}
          tags={resume.tags}
          avatar={resume.avatar}
        ></ResumeCard>
      ))}
    </List>
  );
};

export default ResumesList;
