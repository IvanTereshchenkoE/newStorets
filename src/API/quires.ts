import axios from "axios";
import { AxiosPromise } from "axios";
import { Resume } from "../store/reducers/resumeReducer";
import { Job } from "../types/jobs";
import myApi from "./axios";
export const getJobs = (): AxiosPromise<Job[]> => {
  return myApi.get("/");
};

export const getResumes = (): AxiosPromise<Resume[]> => {
  return myApi.get("/resumes");
};
