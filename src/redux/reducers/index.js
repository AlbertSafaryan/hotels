import { combineReducers } from "redux";
import { hotelsReducer } from "./hotelReducer";
import { userReducer } from "../reducers/userReducer";
import { selectedHotelReducer } from "./hotelReducer";

export const reducers = combineReducers({
  hotels: hotelsReducer,
  selectedHotels: selectedHotelReducer,
  userReducer: userReducer
});
