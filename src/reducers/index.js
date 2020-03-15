import { EDIT_PROFILE, CHANGE_PHOTO } from "../actions";

export const DocumentReducer = (state, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.payload.name]: action.payload.value
        }
      };
    case CHANGE_PHOTO:
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          image: action.payload.image
        }
      };
    default:
      return state;
  }
};
