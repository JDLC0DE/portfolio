import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";
import { IconType } from "react-icons";

import { useScreenSize } from "@/hooks/common/useScreenSize";
import { MENU_ITEMS } from "@/assets/constants/navbar";

interface AsideMenuProps {
  isOpen?: boolean;
  themeIcon: IconType;
  toggleTheme: () => void;
  options: typeof MENU_ITEMS;
}

export const AsideMenu: React.FC<AsideMenuProps> = ({
  isOpen,
  options,
  themeIcon,
  toggleTheme,
}) => {
  const { width } = useScreenSize();
  const isTablet = width < 768;
  const ThemeIcon = themeIcon;

  useEffect(() => {
    if (isTablet && isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen, isTablet]);

  return (
    <aside
      className={clsx(
        "bg-zinc-50 dark:bg-zinc-900 h-[calc(100vh-65px)] w-screen transform-gpu transition-all ease-in-out fixed z-[15] md:hidden",
        isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"
      )}
    >
      <ul className="container mx-auto px-4 text-zinc-500 dark:text-zinc-50 mt-5 space-y-6">
        {options.map((option) => (
          <li key={option.title} className="py-2">
            <Link className="" href={option.link}>
              {option.title}
            </Link>
          </li>
        ))}
      </ul>

      <footer className="border-t border-t-zinc-300 dark:border-t-zinc-600 text-zinc-400 dark:text-zinc-50 absolute inset-x-0 bottom-0">
        <div className="container mx-auto px-4 py-[18px] flex">
          <button className="text-2xl" onClick={toggleTheme}>
            <ThemeIcon />
          </button>
        </div>
      </footer>
    </aside>
  );
};
