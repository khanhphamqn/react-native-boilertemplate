import {
 CHANGE_LANGUAGE
} from '../../constants/lang';

export const changeLanguge = (lang) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: lang
  };
};