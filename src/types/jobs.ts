export type JobsState = {
  jobs: any[];
};

export enum JobsActionTypes {
  FETCH_JOBS = "FETCH_JOBS",
}

export type FetchJobsAction = {
  type: JobsActionTypes.FETCH_JOBS;
  payload: any[];
};

