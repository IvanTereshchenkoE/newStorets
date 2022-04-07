import { JobsActionTypes, Level } from "../../types/jobs";

export default interface Job {
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
