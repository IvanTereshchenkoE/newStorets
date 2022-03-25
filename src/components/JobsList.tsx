import styled from "styled-components";

import JobsCard from "./JobsCard";

import useJobs from "../hooks/useJobs";

import { Job } from "../types/jobs";

const List = styled.div``;

const JobsList = () => {
  const { list } = useJobs();
  return (
    <List>
      {list.map((job: Job) => (
        <JobsCard
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