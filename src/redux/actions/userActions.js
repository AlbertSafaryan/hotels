import { ActionTypes } from "../constants/Action-Types";

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};