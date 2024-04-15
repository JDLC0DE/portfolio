import { useEffect, useState } from "react";

export type ThemeType = "light" | "dark";
export type darkModeType = [ThemeType, () => void];

export function useDarkMode(): darkModeType {
  const [theme, setTheme] = useState<ThemeType>("light");

  const setMode = (mode: ThemeType) => {
    window.localStorage.setItem("theme", mode);
    document.documentElement.className = mode;
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") ?? "light";
    setMode(localTheme as ThemeType);
  }, []);

  return [theme, toggleTheme];
}
