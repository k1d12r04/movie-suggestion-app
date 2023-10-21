import Navbar from './components/layout/Navbar';
import MovieList from './components/movie/MovieList';

// import { CiSearch } from 'react-icons/ci';
// import {useState} from 'react';
// import { Input } from '@nextui-org/react';
export default function Home() {
  // const [searchValue, setSearchValue] = useState('');

  return (
    <main>
      <Navbar />

      <div>
        <h2 className="text-blue-500 text-2xl">Popular Movies</h2>
        <MovieList type="popular" />

        <h2 className="text-blue-500 text-2xl">Trending Movies</h2>
        <MovieList type="trending" />

        <h2 className="text-blue-500 text-2xl">Top Rated Movies</h2>
        <MovieList type="topRated" />
      </div>
    </main>
  );
}

{
  /* <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small text-white/90',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder="Film ara..."
            startContent={<CiSearch size={18} />}
            isClearable
            size="sm"
            value={searchValue}
            onValueChange={setSearchValue}
            className="hidden md:flex"
          /> */
}
