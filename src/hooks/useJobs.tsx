import { List } from "material-ui";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { response } from "../API/axios";
import JobsCard from "../components/JobsCard";
import { setSearchesJobs } from "../store/action/setSearches";
import { useTypeSelector } from "./useTypeSelector";
import { JobsState } from "../types/jobs";
import JobsList from "../components/JobsList";

export default function useJobs(): any {
  const dispatch = useDispatch();
  useEffect(() => {
    response.then(res => dispatch(setSearchesJobs(res.data)));
  }, [dispatch]);
  const { jobs } = useTypeSelector(state => state.jobs);
  console.log(jobs);
  return jobs;
}
