import { SET_FIRSTNAME, SET_FLAG, SET_HEADER_ICON, SET_LASTNAME, SET_PROFILE_EMAIL, SET_PROFILE_IMAGE } from "../actions";

export const setFirstName = (data) => ({
    type: SET_FIRSTNAME,
    payload: data,
  });
export const setLastName = (data) => ({
    type: SET_LASTNAME,
    payload: data,
  });
  
  export const setFlagValue = (data) => ({
    type: SET_FLAG,
    payload: data,
  });
  export const setHeaderIcon = (data) => ({
    type: SET_HEADER_ICON,
    payload: data,
  });
  
  export const setPreofileImage = (data) => ({
    type: SET_PROFILE_IMAGE,
    payload: data,
  });
  export const setProfileEmail = (data) => ({
    type: SET_PROFILE_EMAIL,
    payload: data,
  });
  
 