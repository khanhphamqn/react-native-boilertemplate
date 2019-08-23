import {
    START_LOADING,
    STOP_LOADING
} from '../../constants/loading';

const initialState = {
    isLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: action.payload };
        case STOP_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

export default LoadingReducer;