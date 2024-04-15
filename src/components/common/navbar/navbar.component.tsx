"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { AsideMenu } from "../aside-menu";
import { NavbarProps } from "./navbar.type";
import { useDarkMode } from "@/hooks/useDarkMode";
import { MENU_ITEMS } from "@/assets/constants/navbar.constant";

export const Navbar: React.FC<NavbarProps> = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const ThemeIcon = theme === "light" ? IoMdMoon : MdWbSunny;

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="border-b border-b-zinc-300 dark:border-b-zinc-600 bg-zinc-50 dark:bg-zinc-900 sticky top-0 z-20 w-full">
        <nav className="container mx-auto px-4 lg:px-32 xl:px-64 py-[18px] flex justify-between items-center text-zinc-950 dark:text-white">
          <span className="text-xl font-semibold">J. DLCode</span>
          <ul className="flex items-center gap-10 max-md:hidden">
            {MENU_ITEMS.map((item) => (
              <li
                key={item.title}
                className="inline-flex items-center cursor-pointer"
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
            <li className="inline-flex items-center cursor-pointer">
              <button className="max-md:hidden text-lg" onClick={toggleTheme}>
                <ThemeIcon />
              </button>
            </li>
          </ul>
          <button className="text-2xl md:hidden" onClick={handleMenu}>
            {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </nav>
      </header>

      <AsideMenu
        isOpen={isOpen}
        options={MENU_ITEMS}
        themeIcon={ThemeIcon}
        toggleTheme={toggleTheme}
      />
    </>
  );
};
