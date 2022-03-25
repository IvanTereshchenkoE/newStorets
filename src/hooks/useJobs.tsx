import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setSearchesJobs } from "../store/action/setSearches";

import { useTypeSelector } from "./useTypeSelector";

import { Job } from "../types/jobs";

import { getJobs } from "../API/quries";

type State = {
  list: Job[];
};

export default function useJobs(): State {
  const dispatch = useDispatch();
  const { jobs } = useTypeSelector(state => state.jobs);
  useEffect(() => {
    getJobs().then(res => dispatch(setSearchesJobs(res.data)));
  }, [dispatch]);
  console.log(jobs);
  return { list: jobs };
}
