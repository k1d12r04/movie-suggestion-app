'use client';

import { useMovieList } from './useMovieList';
import MovieItem from './MovieItem';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { useRef } from 'react';

type MovieType = 'popular' | 'trending' | 'topRated';

type MovieListProps = {
  type: MovieType;
};

const MovieList = ({ type }: MovieListProps) => {
  const { data, isLoading, isError, error } = useMovieList(type);
  const swiperElRef = useRef<SwiperRef>(null);

  if (isLoading) {
    return <div>Fimler yükleniyor...</div>;
    // buraya spin veya skeleton loading ekle
  }

  if (isError) {
    console.error('Error:', error);
    return <div>Beklenmedik bir hata oluştu</div>;
  }

  console.log(data?.results);

  return (
    <div className="relative mb-20">
      <Swiper
        ref={swiperElRef}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={20}
        navigation={{ nextEl: 'swiper-next', prevEl: 'swiper-prev' }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
            slidesPerGroup: 3,
          },
        }}
      >
        {data?.results.map(movie => (
          <SwiperSlide key={movie.id}>
            <MovieItem movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <BsFillArrowLeftCircleFill
        onClick={() => swiperElRef.current?.swiper.slidePrev()}
        className="swiper-prev navigationButton lg:-left-14"
      />

      <BsFillArrowRightCircleFill
        onClick={() => swiperElRef.current?.swiper.slideNext()}
        className="swiper-next navigationButton lg:-right-14"
      />
    </div>
  );
};

export default MovieList;
