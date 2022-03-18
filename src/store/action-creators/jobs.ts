import axios from "axios";
import { Dispatch } from "redux";
import { JobsAction, JobsActionTypes } from "../../types/jobs";

export const fetchJobs = () => {
  return async (dispatch: Dispatch<JobsAction>) => {
    try {
      dispatch({ type: JobsActionTypes.FETCH_JOBS });
      const response = await axios.get("http://localhost:5999/api/vacancy");
      setTimeout(() => {
        dispatch({
          type: JobsActionTypes.FETCH_JOBS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: JobsActionTypes.FETCH_JOBS_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};

