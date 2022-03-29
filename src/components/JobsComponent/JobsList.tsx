import styled from "styled-components";

import JobsCard from "./JobsCard";

import useJobs from "../../hooks/useJobs";
import { Job } from "../../types/jobs";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { getJobs } from "../../API/quires";

const List = styled.div``;

const JobsList = () => {
  const { list } = useJobs();
  return (
    <List>
      {list.map(job => (
        <JobsCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          salary={job.salary}
        ></JobsCard>
      ))}
    </List>
  );
};

export default JobsList;
