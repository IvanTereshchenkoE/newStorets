import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setSearchesJobs } from "../store/action/setSearches";

import { useTypeSelector } from "./useTypeSelector";

import { Job } from "../types/jobs";
import { getJobs } from "../API/quires";
import React from "react";

type State = {
  list: Job[];
};

export default function useJobs(): State {
  const dispatch = useDispatch();

  const { jobs } = useTypeSelector(state => state.jobs);

  useEffect(() => {
    getJobs().then(res => dispatch(setSearchesJobs(res.data)));
  }, [dispatch]);

  return { list: jobs };
}

