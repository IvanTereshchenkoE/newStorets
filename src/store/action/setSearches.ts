import { FetchJobsAction, JobsActionTypes } from "../../types/jobs";

export function setSearchesJobs(list): FetchJobsAction {
  return {
    type: JobsActionTypes.FETCH_JOBS,
    payload: list,
  };
}
