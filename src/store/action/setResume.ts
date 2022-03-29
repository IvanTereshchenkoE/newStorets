const SET_RESUME = "SET_RESUME";

type Resume = {
  id: number;
  name: string;
  experience: number;
  level: string;
  tags: string[];
};

type Action = {
  type: typeof SET_RESUME;
  list: Resume[];
};

export const setResume = (list: Resume[]): Action => {
  return {
    type: SET_RESUME,
    list,
  };
};
