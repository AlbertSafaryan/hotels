import { ActionTypes } from "../constants/Action-Types";

export const setHotels = (hotels) => {
  return {
    type: ActionTypes.SET_HOTELS,
    payload: hotels,
  };
};

export const selectedHotels = (hotel) => {
  return {
    type: ActionTypes.SELECTED_HOTELS,
    payload: hotel,
  };
};

export const removeSelectedHotel = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_HOTEL,
  };
};
