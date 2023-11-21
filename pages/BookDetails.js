import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookDetails.scss"; // Import the SCSS file

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [userReview, setUserReview] = useState("");

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Handle submission of user review (you can add your logic here)
    console.log("User review submitted:", userReview);
    setUserReview(""); // Clear the review input after submission
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details-container">
      <h2>{book.volumeInfo.title}</h2>
      {book.volumeInfo.imageLinks && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="book-cover"
        />
      )}
      <div className="book-info">
        <p>Author(s): {book.volumeInfo.authors?.join(", ")}</p>
        <p>Publisher: {book.volumeInfo.publisher}</p>
        <p>Published Date: {book.volumeInfo.publishedDate}</p>
        <p>Categories: {book.volumeInfo.categories?.join(", ")}</p>
        <p>Page Count: {book.volumeInfo.pageCount}</p>
        <p>Language: {book.volumeInfo.language}</p>
        <p>
          Preview Link:{" "}
          <a
            href={book.volumeInfo.previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
        </p>
        <div className="book-description">
          <p>
            {showFullDescription
              ? book.volumeInfo.description
              : `${book.volumeInfo.description.slice(0, 200)}...`}
          </p>
          {book.volumeInfo.description.length > 200 && (
            <button onClick={toggleDescription} className="show-more-button">
              {showFullDescription ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
        {/* Review section */}
        <div className="review-section">
          <h3>Reviews</h3>
          <form onSubmit={handleReviewSubmit}>
            <label htmlFor="user-review">Your Review:</label>
            <textarea
              id="user-review"
              rows="4"
              cols="50"
              value={userReview}
              onChange={(e) => setUserReview(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
