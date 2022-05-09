import { FetchJobsAction, JobsActionTypes, JobsState } from "../../types/jobs";

const initialState: JobsState = {
  jobs: [],
};

export const jobsReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: JobsState = initialState,
  action: FetchJobsAction
): JobsState => {
  switch (action.type) {
    case JobsActionTypes.FETCH_JOBS:
      return { jobs: action.payload };
    default:
      return state;
  }
};
