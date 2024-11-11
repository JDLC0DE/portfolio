import { FC } from 'react'
import { IoMdMoon } from 'react-icons/io'
import { MdWbSunny } from 'react-icons/md'

import { useDarkMode } from '@/hooks/useDarkMode'

export const ToggleTheme: FC = () => {
  const [theme, toggleTheme] = useDarkMode()
  const ThemeIcon = theme === 'light' ? IoMdMoon : MdWbSunny

  return (
    <button className="text-2xl md:text-lg" onClick={toggleTheme}>
      <ThemeIcon />
    </button>
  )
}
