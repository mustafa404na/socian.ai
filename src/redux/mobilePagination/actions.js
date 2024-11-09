import {
  NEXTPAGE,
  PREVIOUSPAGE,
  SETCURRENTPAGE,
  SETPAGENUMBER,
  CHANGENAVCOLOR,
} from "./actionType";

export const nextPage = () => {
  return {
    type: NEXTPAGE,
  };
};
export const previousPage = () => {
  return {
    type: PREVIOUSPAGE,
  };
};
export const setCurrentPage = (payload) => {
  return {
    type: SETCURRENTPAGE,
    payload,
  };
};
export const setPageNumber = (payload) => {
  return {
    type: SETPAGENUMBER,
    payload,
  };
};
export const changeNavColor = (payload) => {
  return {
    type: CHANGENAVCOLOR,
    payload,
  };
};
