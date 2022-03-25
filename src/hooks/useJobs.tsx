import { List } from "material-ui";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { response } from "../API/axios";
import JobsCard from "../components/JobsCard";
import { setSearchesJobs } from "../store/action/setSearches";
import { useTypeSelector } from "./useTypeSelector";
import { Job, JobsState } from "../types/jobs";
import JobsList from "../components/JobsList";

type State = {
  list: Job[];
};

export default function useJobs(): State {
  const dispatch = useDispatch();
  const { jobs } = useTypeSelector(state => state.jobs);
  useEffect(() => {
    response.then(res => dispatch(setSearchesJobs(res.data)));
  }, [dispatch]);
  console.log(jobs);
  return { list: jobs };
}