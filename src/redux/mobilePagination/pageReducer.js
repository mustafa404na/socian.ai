import {
  NEXTPAGE,
  PREVIOUSPAGE,
  SETCURRENTPAGE,
  SETPAGENUMBER,
  CHANGENAVCOLOR,
} from "./actionType";
const initialState = {
  pages: 13,
  current: 1,
  navTheme: "dark",
};
const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXTPAGE:
      if (state.pages !== state.current) {
        return {
          ...state,
          current: state.current + 1,
        };
      }
      return state;
    case PREVIOUSPAGE:
      if (state.current !== 1) {
        return {
          ...state,
          current: state.current - 1,
        };
      }
      return state;
    case SETCURRENTPAGE:
      if (action.payload) {
        return {
          ...state,
          current: action.payload,
        };
      }
      return state;

    case SETPAGENUMBER:
      if (action.payload) {
        return {
          ...state,
          pages: action.payload,
        };
      }
      return state;
    case CHANGENAVCOLOR:
      if (action.payload) {
        return {
          ...state,
          navTheme: action.payload,
        };
      }
      return state;
    default:
      return state;
  }
};
export default pageReducer;
