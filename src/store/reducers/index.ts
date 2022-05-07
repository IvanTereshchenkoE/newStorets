import { combineReducers } from "redux";
import { jobsReducer } from "./jobReducer";
import { resumesReducer } from "./resumeReducer";

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  resume: resumesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
