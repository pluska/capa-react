import { REGISTER, LOGIN } from './actions';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return { ...state, user: action.payload };
        case LOGIN:
            return { ...state, isAuthenticated: true, user: action.payload };
        default:
            return state;
    }
};

export default userReducer;