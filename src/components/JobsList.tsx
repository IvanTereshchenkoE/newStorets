import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import styled from "styled-components";
import JobsCard from "./JobsCard";
import { setSearchesJobs } from "../store/action/setSearches";
import { response } from "../API/axios";
import useJobs from "../hooks/useJobs";
import { Job, JobsState } from "../types/jobs";

const List = styled.div``;

const JobsList = () => {
  const jobs = useJobs();
  return (
    <List>
      {jobs.map((jobs: Job) => (
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
