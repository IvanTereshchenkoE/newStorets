export const SET_RESUME = "SET_RESUME";

const initialState: State = {
  list: [],
};

export const resumesReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_RESUME:
      return {
        list: action.list,
      };

    default:
      return state;
  }
};

export type State = {
  list: Resume[];
};

export enum Level {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
}

export type Resume = {
  id: number;
  name: string;
  experience: number;
  level: keyof typeof Level;
  tags: string[];
};

export type setResumeAction = {
  type: typeof SET_RESUME;
  list: Resume[];
};

export type Action = setResumeAction;
