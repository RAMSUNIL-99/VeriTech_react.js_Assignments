import React from 'react';
import MovieCard from './MovieCard';

const App = () => {
  return (
    <div className="app">
      <h1>Netflix Clone</h1>
      <MovieCard
        title="Inception"
        imageUrl="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
        description="A thief who enters the dreams of others to steal their secrets."
        releaseYear={2010}
      />
    </div>
  );
};

export default App;