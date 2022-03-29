import { JobsActionTypes } from "../../types/jobs";

export default interface Job {
  id: number;
  title: string;
  company: string;
  salary: number;
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
