import { FETCHING_USERS_LIST_SUCCESS } from "../types";

export const getUsers = () => async dispatch => {
  try {
    const data = await fetch(
      `https://my-json-server.typicode.com/denisyuk26/db/users`
    );
    const arr = await data.json();
    const UsersIntoState = dispatch({
      type: FETCHING_USERS_LIST_SUCCESS,
      payload: arr
    });
  } catch (error) {
    console.log(error);
  }
};
