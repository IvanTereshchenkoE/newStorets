export type JobsState = {
  jobs: Job[];
};

export enum JobsActionTypes {
  FETCH_JOBS = "FETCH_JOBS",
}

export type FetchJobsAction = {
  type: JobsActionTypes.FETCH_JOBS;
  payload: Job[];
};

export type Job = {
  id: number;
  title: string;
  shordiscription: string;
  Description: string;
  price: number;
};

