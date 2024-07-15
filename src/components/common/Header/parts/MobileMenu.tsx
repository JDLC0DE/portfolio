import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { useScreenSize } from "@/hooks/common/useScreenSize";
import { MENU_ITEMS } from "@/assets/constants/navbar";
import { useDarkMode } from "@/hooks/common/useDarkMode";

export const MobileMenu = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useScreenSize();
  const isTablet = width < 768;
  const ThemeIcon = theme === "light" ? IoMdMoon : MdWbSunny;

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isTablet && isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen, isTablet]);

  return (
    <>
      <button className="text-2xl md:hidden" onClick={handleMenu}>
        {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
      </button>
      <aside
        className={clsx(
          "bg-white dark:bg-zinc-900 h-[calc(100vh-65px)] w-screen left-0 bottom-0 transform-gpu transition-all ease-in-out fixed z-[15] md:hidden",
          isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"
        )}
      >
        <ul className="container mx-auto px-4 text-zinc-500 dark:text-white mt-5 space-y-6">
          {MENU_ITEMS.map((option) => (
            <li key={option.title} className="py-2">
              <Link className="" href={option.link}>
                {option.title}
              </Link>
            </li>
          ))}
        </ul>

        <footer className="border-t border-t-zinc-300 dark:border-t-zinc-600 text-zinc-400 dark:text-white absolute inset-x-0 bottom-0">
          <div className="container mx-auto px-4 py-[18px] flex">
            <button className="text-2xl" onClick={toggleTheme}>
              <ThemeIcon />
            </button>
          </div>
        </footer>
      </aside>
    </>
  );
};
