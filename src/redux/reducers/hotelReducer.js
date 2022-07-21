import { ActionTypes } from "../constants/Action-Types";

const initalState = {
  hotels: [],
};

export const hotelsReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HOTELS:
      return {
        ...state,
        hotels: payload,
      };
    default:
      return state;
  }
};

export const selectedHotelReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_HOTELS:
      if (state.find(el => el.id === payload.id)) {
        return [...state];
      }
      return [
        ...state,
        payload,
      ];
    case ActionTypes.REMOVE_SELECTED_HOTEL:
      return {};
    default:
      return state;
  }
};
