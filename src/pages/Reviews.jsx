import { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/api/reviews.json')
            .then(response => response.json())
            .then(data => setReviews(data));
    }, []);

    return (
            <>
                <h1>Reviews</h1>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>{review.comment} - {review.autor} - {review.date}</li>
                    ))}
                </ul>
            </>
    );
};

export default Reviews;
