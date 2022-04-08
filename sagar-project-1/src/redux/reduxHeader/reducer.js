import {SET_FIRSTNAME, SET_FLAG, SET_HEADER_ICON, SET_LASTNAME, SET_PROFILE_EMAIL, SET_PROFILE_IMAGE} from "../actions";
const INIT_STATE = {
  firstNameIs: "",
  lastNameIs: "",
  flagIs: 0,
  headerIconIs: false,
  profileImageIs: [],
  profileEmailIs: "",
  };
  

const headerSession = (state = INIT_STATE, action) => {


    switch (action.type) {
      case SET_FIRSTNAME:
      return { 
        ...state,
         firstNameIs: action.payload ,
        };
      case SET_LASTNAME:
      return { 
        ...state,
         lastNameIs: action.payload ,
        };
  
      case SET_FLAG:
        return {
          ...state,
          loading: false,
          flagIs: action.payload,
          error: "",
        };
      case SET_HEADER_ICON:
        return {
          ...state,
          loading: false,
          headerIconIs: action.payload,
          error: "",
        };
      case SET_PROFILE_IMAGE:
        return {
          ...state,
          loading: false,
          profileImageIs: action.payload,
          error: "",
        };
      case SET_PROFILE_EMAIL:
        return {
          ...state,
          loading: false,
          profileEmailIs: action.payload,
          error: "",
        };

        default:
            return { ...state };
    }
}
        export default headerSession;