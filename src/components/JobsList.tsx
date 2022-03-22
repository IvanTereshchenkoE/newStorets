import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import styled from "styled-components";
import JobsCard from "./JobsCard";
import { setSearchesJobs } from "../store/action/setSearches";
import { response } from "../API/axios";

const List = styled.div``;

const JobsList: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    response.then(res => dispatch(setSearchesJobs(res.data)));
  }, [dispatch]);
  const { jobs } = useTypeSelector(state => state.jobs);
  return (
    <List>
      {jobs.map((jobs: { id: any }) => (
        <JobsCard key={jobs.id} jobs={jobs}></JobsCard>
      ))}
    </List>
  );
};

export default JobsList;
