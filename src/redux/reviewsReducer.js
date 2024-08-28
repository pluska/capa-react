import { FETCH_REVIEWS } from './actions';

const initialState = {
    reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REVIEWS:
            return { ...state, reviews: action.payload };
        default:
            return state;
    }
};

export default reviewsReducer;