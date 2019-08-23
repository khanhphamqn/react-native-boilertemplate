import {
  START_LOADING,
  STOP_LOADING
} from '../../constants/loading';

export const loadingChanged = (status) => {
  return {
    type: status ? START_LOADING : STOP_LOADING,
    payload: status
  };
};