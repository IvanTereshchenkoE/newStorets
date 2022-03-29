import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getResumes } from "../API/quires";
import { setResume } from "../store/action/setResume";
import { Level, Resume } from "../store/reducers/resumeReducer";
import { useTypeSelector } from "./useTypeSelector";

export type SearchType = {
  level: keyof typeof Level | "";
  tags: string[];
};

type State = {
  handleChangeLevel(value: keyof typeof Level): void;
  handleChangeSkills(value: string[]): void;
  search: SearchType;
  list: Resume[];
};

export const useResumes = (): State => {
  const [search, setSearch] = useState<SearchType>({
    level: "",
    tags: [],
  });

  const dispatch = useDispatch();

  const { list } = useTypeSelector(state => state.resume);

  useEffect(() => {
    getResumes().then(res => dispatch(setResume(res.data)));
  }, [dispatch]);

  const handleChangeLevel = (value: keyof typeof Level | "") => {
    const newSearch = {
      ...search,
      level: value,
    };
    setSearch(newSearch);
    getResumes(newSearch).then(res => {
      dispatch(setResume(res.data));
    });
  };

  const handleChangeSkills = (tags: []) => {
    const newSearch = {
      ...search,
      tags: tags,
    };
    setSearch(newSearch);
    getResumes(newSearch).then(res => {
      dispatch(setResume(res.data));
    });
  };
  return {
    handleChangeLevel,
    handleChangeSkills,
    list,
    search,
  };
};
