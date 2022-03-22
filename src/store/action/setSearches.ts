import { FetchJobsAction, JobsActionTypes, JobsState } from "../../types/jobs";

export function setSearchesJobs(payload: any[]): FetchJobsAction {
  return {
    type: JobsActionTypes.FETCH_JOBS,
    payload,
  };
}
