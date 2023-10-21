import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

type MovieType = 'popular' | 'trending' | 'topRated';

type Movie = {
  id: number;
  title: string;
  overview: string;
};

type MovieListResponse = {
  results: Movie[];
};

export function useMovieList(type: MovieType) {
  const fetchMovieList = async () => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODViZGQyM2FjNWI5ZjNiNGZlYzkzNjhmYzljZjI4NiIsInN1YiI6IjY0OTQ4ODE1ZTIyZDI4MDEwNzNhYTExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyOfaJ7nnzwJ2kvAAab8n_pNwVK0YN3f4ksrp2mB_Bw',
      },
    };

    let endpoint = '';
    switch (type) {
      case 'popular':
        endpoint = 'movie/popular';
        break;
      case 'trending':
        endpoint = 'trending/movie/week';
        break;
      case 'topRated':
        endpoint = 'movie/top_rated';
        break;
      default:
        endpoint = 'movie/popular';
        break;
    }

    const response: AxiosResponse<MovieListResponse> = await axios.get(
      `https://api.themoviedb.org/3/${endpoint}?language=tr-TR&page=1`,
      options
    );

    return response.data;
  };

  return useQuery(type, fetchMovieList);
}
