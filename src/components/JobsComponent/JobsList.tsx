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
    <>
      <List>
        {list.map(job => (
          <JobsCard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            salary={job.salary}
            level={job.level}
            avatar={job.avatar}
            rating={job.rating}
            activity={job.activity}
            created_at={job.created_at}
            skills={job.skills}
            currency={job.currency}
          ></JobsCard>
        ))}
      </List>
    </>
  );
};

export default JobsList;
