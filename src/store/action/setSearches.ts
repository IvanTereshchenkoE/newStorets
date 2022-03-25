import { FetchJobsAction, JobsActionTypes } from "../../types/jobs";

export default interface Job {
  id: number;
  title: string;
  shortDiscription: string;
  fullDiscription: string;
  price: number;
}

type List = {
  type: JobsActionTypes.FETCH_JOBS;
  payload: Job[];
};

export function setSearchesJobs(payload: Job[]): List {
  return {
    type: JobsActionTypes.FETCH_JOBS,
    payload,
  };
}
