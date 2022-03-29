import axios from "./axios";
import { AxiosPromise } from "axios";
import { Level, Resume } from "../store/reducers/resumeReducer";
import { Job } from "../types/jobs";

export type FilterType = {
  level: keyof typeof Level | "";
  tags: string[];
};

export const getJobs = (): AxiosPromise<Job[]> => axios.get("/");

export const getResumes = (
  queryParams: FilterType = { level: "", tags: [] }
): AxiosPromise<Resume[]> =>
  axios.get("/resumes", {
    params: queryParams,
  });
