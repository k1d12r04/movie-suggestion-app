'use client';

import MovieLogo from '../MovieLogo';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

const NavbarComponent = () => {
  return (
    <nav className="py-2 lg:py-4">
      <Navbar>
        <NavbarBrand>
          <MovieLogo />
          <p className="font-bold text-inherit ml-2">NE İZLESEM</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
              Rasgele öner
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Favorilerim
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Giriş</Link>
          </NavbarItem>
          <NavbarItem>
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
