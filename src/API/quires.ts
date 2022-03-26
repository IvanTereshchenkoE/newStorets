import { AxiosPromise } from "axios";
import { Job } from "../types/jobs";
import myApi from "./axios";
export const getJobs = (): AxiosPromise<Job[]> => {
  return myApi.get("/");
};
