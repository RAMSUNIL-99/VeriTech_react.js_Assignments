import React from 'react';

const MovieCard = ({ title, imageUrl, description, releaseYear }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Release Year: {releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;