import React from 'react';
import { Movie } from '@/typing';
import Image from 'next/image';

type MovieItemProps = {
  movie: Movie;
};

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500${
        movie.poster_path || movie.backdrop_path
      }`}
      alt="movie thumbnail"
      className="rounded-lg cursor-pointer hover:scale-95 transition"
      width={200}
      height={0}
    />
  );
};

export default MovieItem;
