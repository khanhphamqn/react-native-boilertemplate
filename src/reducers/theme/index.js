import {
  CHANGE_THEME,
} from '../../constants/theme';
import Themes from '../../themes';

const initialState = {
  type: Themes['Light'],
  isDart: false
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        type: Themes[action.payload.type],
        isDart: action.payload.value
      };
    default:
      return state;
  }
};

export default ThemeReducer;