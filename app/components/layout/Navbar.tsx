'use client';

import MovieLogo from '../MovieLogo';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from '@nextui-org/react';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';

const NavbarComponent = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <nav className="py-2 lg:py-4">
      <Navbar>
        <NavbarBrand>
          <MovieLogo />
          <p className="font-bold text-inherit ml-2">NE İZLESEM</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Kategoriler
            </Link>
          </NavbarItem>

          {/*  TODO: accesibility için current tab'i bu şekilde belirtebilirsin */}
          {/* <NavbarItem isActive>
            <Link color="foreground" href="#" aria-current="page">
              Rasgele öner
            </Link>
          </NavbarItem> */}
          <NavbarItem>
            <Link color="foreground" href="#">
              Rastgele öner
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Favorilerim
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" as="div" className="items-center">
          <Input
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
            className="hidden lg:flex"
            value={searchValue}
            onValueChange={setSearchValue}
          />
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Giriş</Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary" href="#" variant="flat">
              Kayıt ol
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </nav>
  );
};
export default NavbarComponent;
