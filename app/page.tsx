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

      <section>
        <h2 className="text-primary text-2xl">Popüler Fimler</h2>
        <MovieList type="popular" />

        <h2 className="text-primary text-2xl">Trendler</h2>
        <MovieList type="trending" />

        <h2 className="text-primary text-2xl">En Beğenilenler</h2>
        <MovieList type="topRated" />
      </section>
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
