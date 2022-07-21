import { ActionTypes } from "../constants/Action-Types";

const initalState = {
  user: {},
};

export const userReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};