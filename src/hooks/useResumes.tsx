import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResumes } from "../API/quires";
import { setResume } from "../store/action/setResume";
import { Resume } from "../store/reducers/resumeReducer";
import { useTypeSelector } from "./useTypeSelector";

type State = {
  list: Resume[];
};

export const useResumes = (): State => {
  const [search, setSearch] = useState({
    salary: 0,
  });

  const dispatch = useDispatch();

  const { list } = useTypeSelector(state => state.resume);

  useEffect(() => {
    getResumes().then(res => dispatch(setResume(res.data)));
  }, [dispatch]);

  return {
    list: list,
  };
};
