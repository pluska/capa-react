import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchReviews } from '../redux/actions'; // Adjust the path as necessary
import { addReview } from '../utils/reviewsJson'; // Adjust the path as necessary

const AddReview = () => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    
    // Get the logged-in user's author name from local storage
    const author = JSON.parse(localStorage.getItem('userName')) || ''; // Adjust key as necessary

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newReview = { comment, author, id: Date.now() }; // Example ID generation

        // Call the function to add the review to the JSON file
        await addReview(newReview);

        // Optionally, fetch updated reviews to update the Redux store
        dispatch(fetchReviews()); // You may need to implement this action to fetch reviews

        // Clear the form
        setComment('');
    };

    return (
        <>
            <h1>Add Review</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Comment:</label>
                <input type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
                <br />
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" value={author} readOnly /> {/* Make author read-only */}
                <br />
                <button type="submit">Submit Review</button>
            </form>
        </>
    );
};

export default AddReview;