import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "./types";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => async (dispatch) => {
  const response = await axios.get(
    "http://jsonplaceholder.typicode.com/comments"
  );

  dispatch({
    type: FETCH_COMMENTS,
    payload: response,
  });
};

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
};
