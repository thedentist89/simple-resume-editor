import {
  EDIT_PROFILE,
  CHANGE_PHOTO,
  ADD_LANGUAGE,
  DELETE_LANGUAGE
} from "../actions";

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
    case ADD_LANGUAGE:
      return {
        ...state,
        languages: [...state.languages, action.payload.language]
      };
    case DELETE_LANGUAGE:
      return {
        ...state,
        languages: state.languages.filter(
          language => language.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};
