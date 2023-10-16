'use client';

import MovieLogo from '../MovieLogo';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Link,
  Button,
} from '@nextui-org/react';
import { useState } from 'react';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Kategoriler', 'Rasgele öner', 'Favorilerim'];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: 'px-2 sm:px-6',
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <MovieLogo />
          <p className="font-bold text-inherit">NE İZLESEM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <MovieLogo />
          <p className="font-bold text-inherit">NE İZLESEM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Kategoriler
          </Link>
        </NavbarItem>

        {/* TODO: Bu şekilde accessible yapabilirsin seçilen sekmeyi */}
        {/* <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Rastgele öner
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

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Kayıt ol</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-base"
            as={Link}
            color="warning"
            href="#"
            variant="flat"
          >
            Giriş
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default NavbarComponent;
