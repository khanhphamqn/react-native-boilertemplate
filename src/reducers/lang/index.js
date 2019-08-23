import {
  CHANGE_LANGUAGE,
} from '../../constants/lang';

const initialState = 'en';

const LangReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
        state = action.payload;
      return state;
    default:
      return state;
  }
};

export default LangReducer;