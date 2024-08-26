import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const {state} = useLocation();

    useEffect(() => {
        setReviews(state);
    }, [state]);

    return (
            <main>
                <h1>Reviews</h1>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>{review.comment} - {review.autor} - {review.date}</li>
                    ))}
                </ul>
            </main>
    );
};

export default Reviews;
