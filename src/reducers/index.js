import { combineReducers } from 'redux';
import LoadingReducer from './loading';
import LangReducer from './lang';
import ThemeReducer from './theme';

const AppReducer = combineReducers({
    lang: LangReducer,
    loading: LoadingReducer,
    theme: ThemeReducer
});
  
export default AppReducer;