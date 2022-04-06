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
