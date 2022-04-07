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

export enum Level {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
  skill = "skill",
}

export enum Activity {
  Testing = "Testing",
  Analytics = "Analytics",
  Backend = "Backend",
  Frontend = "Frontend",
  Design = "Design",
  Applications = "Applications",
  Marketing = "Marketing",
}

export type Job = {
  id: number;
  title: string;
  company: string;
  salary: number;
  level: keyof typeof Level;
  avatar: string;
  rating: number;
  activity: string[];
  created_at: string;
  skills: string[];
  currency: string;
};
