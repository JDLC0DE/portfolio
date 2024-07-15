import { FC } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";

import { useDarkMode } from "@/hooks/common/useDarkMode";

export const ToggleTheme: FC = () => {
  const [theme, toggleTheme] = useDarkMode();
  const ThemeIcon = theme === "light" ? IoMdMoon : MdWbSunny;

  return (
    <button className="max-md:hidden text-lg" onClick={toggleTheme}>
      <ThemeIcon />
    </button>
  );
};
