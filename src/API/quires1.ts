import axios from "axios";
import { AxiosPromise } from "axios";
import { Job } from "../types/jobs";
import myApi1 from "./axios1";
export const getJobs1 = (): AxiosPromise<Job[]> => {
  return myApi1.get("/");
};
