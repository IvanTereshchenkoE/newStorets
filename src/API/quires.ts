import axios from "./axios";
import { AxiosPromise } from "axios";
import { Level, Resume } from "../store/reducers/resumeReducer";
import { Job } from "../types/jobs";

export type FilterType = {
  experience?: number;
  level: keyof typeof Level | "";
  tags: string[];
};

export const getJobs = (queryParams: any = {}): AxiosPromise =>
  axios.get("/jobs", {
    params: queryParams,
  });

export const getResumes = (
  queryParams: FilterType = {
    level: "",
    tags: [],
    experience: 2,
  }
): AxiosPromise =>
  axios.get("/resumes", {
    params: queryParams,
  });
