import { FETCHING_USERS_LIST_SUCCESS } from "../types";

const initialState = [];
export function getUsers(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USERS_LIST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
