import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { setSearchesJobs } from "../store/action/setSearches";

import { useTypeSelector } from "./useTypeSelector";

import { Job, Level } from "../types/jobs";
import { getJobs } from "../API/quires";
import React from "react";

type SearchType = {
  level: keyof typeof Level | "";
  skills: string[];
};

type State = {
  list: Job[];
  search: SearchType;
  handleChangeLevel(value: keyof typeof Level): void;
  handleChangeSalary(value: number): void;
  handleChangeSkills(value: string[]): void;
};

export default function useJobs(): State {
  const [search, setSearch] = useState<SearchType>({
    level: "",
    skills: [],
  });
  const dispatch = useDispatch();

  const { jobs } = useTypeSelector(state => state.jobs);

  useEffect(() => {
    getJobs().then(res => dispatch(setSearchesJobs(res.data.list)));
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

  return {
    list: jobs,
    search,
    handleChangeLevel,
    handleChangeSalary,
    handleChangeSkills,
  };
}
