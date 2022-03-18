import { combineReducers } from "redux";
import { jobsReducer } from "./jobReducer";

export const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export type RootState = ReturnType<typeof rootReducer>