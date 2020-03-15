import {
  EDIT_PROFILE,
  CHANGE_PHOTO,
  ADD_LANGUAGE,
  DELETE_LANGUAGE,
  EDIT_WORK,
  REORDER_WORK,
  ADD_WORK,
  DELETE_WORK,
  EDIT_EDUCATION,
  REORDER_EDUCATION,
  ADD_EDUCATION,
  DELETE_EDUCATION
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
    case EDIT_WORK:
      const workList = [...state.workExperience];
      const work = workList.find(work => work.id === action.payload.id);
      work[action.payload.name] = action.payload.value;
      workList.splice(workList.indexOf(work), 1, work);
      return {
        ...state,
        workExperience: workList
      };
    case REORDER_WORK:
      return {
        ...state,
        workExperience: action.payload.work
      };
    case ADD_WORK:
      return {
        ...state,
        workExperience: [...state.workExperience, action.payload.work]
      };
    case DELETE_WORK:
      return {
        ...state,
        workExperience: state.workExperience.filter(
          work => work.id !== action.payload.id
        )
      };
    case EDIT_EDUCATION:
      const eduList = [...state.education];
      const edu = eduList.find(ed => ed.id === action.payload.id);
      edu[action.payload.name] = action.payload.value;
      eduList.splice(eduList.indexOf(edu), 1, edu);
      return {
        ...state,
        education: eduList
      };
    case REORDER_EDUCATION:
      return {
        ...state,
        education: action.payload.education
      };
    case ADD_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload.education]
      };
    case DELETE_EDUCATION:
      return {
        ...state,
        education: state.education.filter(ed => ed.id !== action.payload.id)
      };
    default:
      return state;
  }
};
