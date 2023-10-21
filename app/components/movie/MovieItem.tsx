import React from 'react';

type Movie = {
  id: number;
  title: string;
  overview: string;
};

type MovieItemProps = {
  movie: Movie;
};

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieItem;
