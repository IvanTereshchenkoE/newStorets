import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as JobsActionCreators from "../store/action-creators/jobs";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(JobsActionCreators, dispatch);
};
