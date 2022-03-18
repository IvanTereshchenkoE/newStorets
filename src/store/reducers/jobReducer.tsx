import { JobsAction, JobsActionTypes, JobsState } from "../../types/jobs";

const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
};

export const jobsReducer = (
  state = initialState,
  action: JobsAction
): JobsState => {
  switch (action.type) {
    case JobsActionTypes.FETCH_JOBS:
      return { loading: true, error: null, jobs: [] };
    case JobsActionTypes.FETCH_JOBS_SUCCESS:
      return { loading: false, error: null, jobs: action.payload };
    case JobsActionTypes.FETCH_JOBS_ERROR:
      return { loading: false, error: action.payload, jobs: [] };
    default:
      return state;
  }
};
