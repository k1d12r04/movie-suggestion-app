import movieLogo from '@/public/images/movieLogo.svg';
import Image from 'next/image';

const MovieLogo = () => {
  return <Image className="w-12 lg:w-12" src={movieLogo} alt="logo" />;
};
export default MovieLogo;
