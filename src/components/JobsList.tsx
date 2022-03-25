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
          key={job.id}
          title={job.title}
          shortDiscription={job.shortDiscription}
          price={job.price}
        ></JobsCard>
      ))}
    </List>
  );
};

export default JobsList;
