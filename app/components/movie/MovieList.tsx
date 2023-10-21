'use client';

import React from 'react';
import { useMovieList } from './useMovieList';
import MovieItem from './MovieItem';

type MovieType = 'popular' | 'trending' | 'topRated';

interface MovieListProps {
  type: MovieType;
}

const MovieList: React.FC<MovieListProps> = ({ type }) => {
  const { data, isLoading, isError, error } = useMovieList(type);

  if (isLoading) {
    return <div>Loading...</div>;
    // spin ekle buraya
  }

  if (isError) {
    console.error('Error:', error);
    return <div>Error: An error occurred</div>;
  }

  console.log(data?.results);

  return (
    <div>
      {data?.results.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
