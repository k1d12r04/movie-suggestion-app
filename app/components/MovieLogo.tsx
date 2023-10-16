import movieLogo from '@/public/images/movieLogo.svg';
import Image from 'next/image';

const MovieLogo = () => {
  return <Image width={70} src={movieLogo} alt="logo" />;
};
export default MovieLogo;
