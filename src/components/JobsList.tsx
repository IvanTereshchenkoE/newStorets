import React, { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchJobs } from "../store/action-creators/jobs";
import styled from "styled-components";
import JobsCard from "./JobsCard";

const List = styled.div`
`;

const JobsList: React.FC = () => {
  const { error, jobs, loading } = useTypeSelector(state => state.jobs);

  const { fetchJobs } = useActions();

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <List>
      {jobs.map(jobs => (
        <JobsCard jobs={jobs}></JobsCard>
      ))}
    </List>
  );
};

export default JobsList;
