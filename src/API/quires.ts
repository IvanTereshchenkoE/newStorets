import axios from "./axios";
import { AxiosPromise } from "axios";
import { Level } from "../store/reducers/resumeReducer";

export type FilterResumeType = {
  experience?: number;
  level: keyof typeof Level | "";
  tags: string[];
};

type FilterJobsType = {
  level: keyof typeof Level | "";
  skills: string[];
  salary: number;
  activity: string[];
};

type FilterGraphsType = {
  salary_medium_per_month: number[];
  activity_count: [{}];
};

export const getJobs = (queryParams: FilterJobsType): AxiosPromise =>
  axios.get("/jobs", {
    params: queryParams,
  });

export const getResumes = (
  queryParams: FilterResumeType = {
    level: "",
    tags: [],
    experience: 2,
  }
): AxiosPromise =>
  axios.get("/resumes", {
    params: queryParams,
  });

export const getGraphs = (
  queryParams: FilterGraphsType = {
    salary_medium_per_month: [],
    activity_count: [{}],
  }
): AxiosPromise =>
  axios.get("/graphs", {
    params: queryParams,
  });
