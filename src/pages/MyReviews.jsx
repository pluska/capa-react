import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MyReviews = () => {
    const { userId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews for the user
        fetch(`/api/reviews?userId=${userId}`)
            .then(response => response.json())
            .then(data => setReviews(data));
    }, [userId]);

    const handleDelete = (reviewId) => {
        // Delete the review
        fetch(`/api/reviews/${reviewId}`, {
            method: 'DELETE'
        })
        .then(() => {
            // Update the reviews list
            setReviews(reviews.filter(review => review.id !== reviewId));
        });
    };

    const handleEdit = (reviewId, newContent) => {
        // Edit the review
        fetch(`/api/reviews/${reviewId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: newContent })
        })
        .then(response => response.json())
        .then(updatedReview => {
            // Update the reviews list
            setReviews(reviews.map(review => review.id === reviewId ? updatedReview : review));
        });
    };

    return (
        <main>
            <h1>My Reviews</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        {review.content}
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                        <button onClick={() => handleEdit(review.id, 'New content')}>Edit</button>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default MyReviews;
