import React from 'react';
import { Movie } from '@/typing';

type MovieItemProps = {
  movie: Movie;
};

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </>
  );
};

export default MovieItem;
