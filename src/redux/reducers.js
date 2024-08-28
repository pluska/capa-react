import { combineReducers } from 'redux';
import userReducer from './userReducer';
import reviewsReducer from './reviewsReducer';

const rootReducer = combineReducers({
    user: userReducer,
    reviews: reviewsReducer,
});

export default rootReducer;