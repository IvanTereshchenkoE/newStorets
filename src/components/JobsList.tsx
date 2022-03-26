import styled from "styled-components";

import JobsCard from "./JobsCard";

import useJobs from "../hooks/useJobs";

import { Job } from "../types/jobs";

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
        />
      ))}
    </List>
  );
};

export default JobsList;
