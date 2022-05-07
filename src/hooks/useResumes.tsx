import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { getResumes } from "../API/quires";

import { setResume } from "../store/action/setResume";
import { Level, Resume } from "../store/reducers/resumeReducer";

import { useTypeSelector } from "./useTypeSelector";

type SearchType = {
  experience?: number;
  level: keyof typeof Level | "";
  tags: string[];
  page: number;
};

type State = {
  handleChangeLevel(value: keyof typeof Level): void;
  handleChangeSkills(value: string[]): void;
  handleChangeExpiriens(value: number): void;
  handleChangePage(value: number): void;
  search: SearchType;
  total: number;
  list: Resume[];
};

export const useResumes = (): State => {
  const [search, setSearch] = useState<SearchType>({
    level: "",
    tags: [],
    page: 1,
  });

  const [total, setTotal] = useState<number>(0);

  const dispatch = useDispatch();

  const { list } = useTypeSelector((state) => state.resume);

  useEffect(() => {
    getResumes(search).then((res) => {
      dispatch(setResume(res.data.list));
      setTotal(res.data.total);
    });
  }, [dispatch]);

  const handleChangeLevel = (value: keyof typeof Level | "") => {
    const newSearch = {
      ...search,
      level: value,
    };
    setSearch(newSearch);
    getResumes(newSearch).then((res) => {
      dispatch(setResume(res.data.list));
    });
  };

  const handleChangeSkills = (tags: []) => {
    const newSearch = {
      ...search,
      tags: tags,
    };
    setSearch(newSearch);
    getResumes(newSearch).then((res) => {
      dispatch(setResume(res.data.list));
    });
  };

  const handleChangeExpiriens = (value: number) => {
    const newSearch = {
      ...search,
      experience: value,
    };
    setSearch(newSearch);
    getResumes(newSearch).then((res) => {
      dispatch(setResume(res.data.list));
    });
  };

  const handleChangePage = (page: number) => {
    const newSearch = {
      ...search,
      page: page,
    };
    setSearch(newSearch);
    getResumes(newSearch).then((res) => {
      dispatch(setResume(res.data.list));
    });
  };

  return {
    handleChangeLevel,
    handleChangeSkills,
    handleChangeExpiriens,
    handleChangePage,
    total,
    list,
    search,
  };
};
