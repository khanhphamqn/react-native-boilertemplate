import {
  CHANGE_THEME
 } from '../../constants/theme';
 
 export const changeTheme = (theme) => {
   return {
     type: CHANGE_THEME,
     payload: theme
   };
 };