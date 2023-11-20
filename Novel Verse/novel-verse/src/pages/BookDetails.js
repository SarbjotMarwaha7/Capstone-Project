import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookDetails.scss"; // Import the SCSS file

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

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
          ISBN-10:{" "}
          {
            book.volumeInfo.industryIdentifiers?.find(
              (identifier) => identifier.type === "ISBN_10"
            )?.identifier
          }
        </p>
        <p>
          ISBN-13:{" "}
          {
            book.volumeInfo.industryIdentifiers?.find(
              (identifier) => identifier.type === "ISBN_13"
            )?.identifier
          }
        </p>
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
        {book.volumeInfo.description && (
          <div
            dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
            className="book-description"
          />
        )}
        {/* Add more details here */}
      </div>
    </div>
  );
};

export default BookDetails;
