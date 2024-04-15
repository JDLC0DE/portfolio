import { IconType } from "react-icons";

type MenuOptionType = {
  title: string;
  link: string;
};

export interface AsideMenuProps {
  isOpen?: boolean;
  themeIcon: IconType;
  toggleTheme: () => void;
  options: MenuOptionType[];
}
