import { fetchReviewsFromJson } from "../utils/reviewsJson";

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';

export const register = (userData) => ({
    type: REGISTER,
    payload: userData,
});

export const login = (credentials) => ({
    type: LOGIN,
    payload: credentials,
});

export const fetchReviews = () => async (dispatch) => {
    const reviews = await fetchReviewsFromJson(); // Implement this function to read from JSON
    dispatch({
        type: FETCH_REVIEWS,
        payload: reviews,
    });
};