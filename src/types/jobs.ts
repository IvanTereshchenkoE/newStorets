export type JobsState = {
  jobs: any[];
  loading: boolean;
  error: null | string;
}

export enum JobsActionTypes {
  FETCH_JOBS = "FETCH_JOBS",
  FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS",
  FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR",
}

type FetchJobsAction = {
  type: JobsActionTypes.FETCH_JOBS;
}

type FetchJobsSuccessAction = {
  type: JobsActionTypes.FETCH_JOBS_SUCCESS;
  payload: any[];
}

type FetchJobsErrorAction = {
  type: JobsActionTypes.FETCH_JOBS_ERROR;
  payload: string;
}

export type JobsAction =
  | FetchJobsAction
  | FetchJobsSuccessAction
  | FetchJobsErrorAction;
