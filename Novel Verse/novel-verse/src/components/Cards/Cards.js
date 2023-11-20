import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Cards/Cards.scss"; // Import the corresponding styles

const YourComponent = () => {
  // State variables to hold different categories of books
  const [topRatedBooks, setTopRatedBooks] = useState([]);
  const [newReleasesBooks, setNewReleasesBooks] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    // Function to fetch books based on the query and set the corresponding state
    const fetchBooks = async (query, setter) => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
        console.log(response.data);
        setter(response.data.items);
      } catch (error) {
        console.error(`Error fetching ${query} books:`, error);
      }
    };

    // Fetching books for top-rated, new releases, and recommended categories
    fetchBooks("fantasy+novels", setTopRatedBooks);
    fetchBooks("fantasy+new+releases", setNewReleasesBooks);
    fetchBooks("fantasy+recommended", setRecommendedBooks);
  }, []);

  return (
    <div className="novel-card">
      {/* Top Rated Section */}
      <div className="section-top">
        <h2>Top Rated </h2>
        <div className="cards-wrapper">
          {topRatedBooks.map((book) => (
            <div className="card" key={book.id}>
              <a href={`/details/${book.id}`}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <p>{book.volumeInfo.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* New Releases Section */}
      <div className="section-new">
        <h2>New Releases</h2>
        <div className="cards-wrapper">
          {newReleasesBooks.map((book) => (
            <div className="card" key={book.id}>
              <a href={`/details/${book.id}`}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <p>{book.volumeInfo.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div className="section-rec">
        <h2>Recommended</h2>
        <div className="cards-wrapper">
          {recommendedBooks.map((book) => (
            <div className="card" key={book.id}>
              <a href={`/details/${book.id}`}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <p>{book.volumeInfo.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
