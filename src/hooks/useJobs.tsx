import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { setSearchesJobs } from "../store/action/setSearches";

import { useTypeSelector } from "./useTypeSelector";

import { Job, Level } from "../types/jobs";

import { getJobs } from "../API/quires";

type SearchType = {
  level: keyof typeof Level | "";
  skills: string[];
  salary: number;
  activity: string[];
};

type State = {
  list: Job[];
  search: SearchType;
  handleChangeLevel(value: keyof typeof Level): void;
  handleChangeSalary(value: number): void;
  handleChangeSkills(value: string[]): void;
  handleSelectActivity(value: string[]): void;
};

export default function useJobs(): State {
  const [search, setSearch] = useState<SearchType>({
    level: "",
    skills: [],
    salary: 0,
    activity: [],
  });
  const dispatch = useDispatch();

  const { jobs } = useTypeSelector(state => state.jobs);

  useEffect(() => {
    getJobs(search).then(res => dispatch(setSearchesJobs(res.data.list)));
  }, [dispatch]);

  const handleChangeLevel = (value: keyof typeof Level | "") => {
    const newSearch = {
      ...search,
      level: value,
    };
    setSearch(newSearch);
    getJobs(newSearch).then(res => {
      dispatch(setSearchesJobs(res.data.list));
    });
  };

  const handleChangeSalary = (value: number) => {
    const newSearch = {
      ...search,
      salary: value,
    };
    setSearch(newSearch);
    getJobs(newSearch).then(res => {
      dispatch(setSearchesJobs(res.data.list));
    });
  };

  const handleChangeSkills = (skills: []) => {
    const newSearch = {
      ...search,
      skills: skills,
    };
    setSearch(newSearch);
    getJobs(newSearch).then(res => {
      dispatch(setSearchesJobs(res.data.list));
    });
  };

  const handleSelectActivity = (activity: string[]) => {
    const newSearch = {
      ...search,
      activity: activity,
    };
    console.log(newSearch);
    setSearch(newSearch);
    getJobs(newSearch).then(res => {
      dispatch(setSearchesJobs(res.data.list));
    });
  };

  return {
    list: jobs,
    search,
    handleChangeLevel,
    handleChangeSalary,
    handleChangeSkills,
    handleSelectActivity,
  };
}
