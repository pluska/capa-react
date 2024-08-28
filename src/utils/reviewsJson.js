import fs from 'fs';
// Replace __dirname with import.meta.url to get the directory path in ES modules
const reviewsFilePath = '../../api/reviews.json';

async function addReview(newReview) {
  try {
    const data = await fs.promises.readFile(reviewsFilePath, 'utf8');
    const reviews = JSON.parse(data);
    reviews.push(newReview);
    await fs.promises.writeFile(reviewsFilePath, JSON.stringify(reviews, null, 2));
    console.log('Review added successfully!');
  } catch (err) {
    console.error(err);
  }
}

async function deleteReview(reviewId) {
  try {
    const data = await fs.promises.readFile(reviewsFilePath, 'utf8');
    const reviews = JSON.parse(data);
    const updatedReviews = reviews.filter(review => review.id !== reviewId);
    await fs.promises.writeFile(reviewsFilePath, JSON.stringify(updatedReviews, null, 2));
    console.log('Review deleted successfully!');
  } catch (err) {
    console.error(err);
  }
}

async function modifyReview(modifiedReview) {
  try {
    const data = await fs.promises.readFile(reviewsFilePath, 'utf8');
    const reviews = JSON.parse(data);
    const reviewIndex = reviews.findIndex(review => review.id === modifiedReview.id);
    if (reviewIndex !== -1) {
      reviews[reviewIndex] = modifiedReview;
      await fs.promises.writeFile(reviewsFilePath, JSON.stringify(reviews, null, 2));
      console.log('Review modified successfully!');
    } else {
      console.log('Review not found!');
    }
  } catch (err) {
    console.error(err);
  }
}

async function fetchReviewsFromJson() {
  try {
    const data = await fs.promises.readFile(reviewsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export { addReview, deleteReview, modifyReview, fetchReviewsFromJson };
