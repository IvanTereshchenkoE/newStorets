import styled from "styled-components";
import JobsCard from "./JobsCard";
import useJobs from "../hooks/useJobs";
import { Job } from "../types/jobs";

const List = styled.div``;

const JobsList = () => {
  const { list } = useJobs();
  return (
    <List>
      {list.map((jobs: Job) => (
        <JobsCard
          key={jobs.id}
          title={jobs.title}
          shordiscription={jobs.shordiscription}
          price={jobs.price}
        ></JobsCard>
      ))}
    </List>
  );
};

export default JobsList;
