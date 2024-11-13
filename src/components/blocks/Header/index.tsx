'use client'

import { FC } from 'react'

import { handleScroll } from '@/utils/header'
import { MobileMenu } from './parts/MobileMenu'
import { ToggleTheme } from './parts/ToggleTheme'
import { MENU_ITEMS } from '@integration/data/constants/navbar'

interface HeaderProps {
  isOpen?: boolean
}

export const Header: FC<HeaderProps> = () => {
  return (
    <>
      <header className="border-b border-b-zinc-300 dark:border-b-zinc-600 bg-white dark:bg-zinc-900 sticky top-0 z-20 w-full">
        <nav className="container mx-auto px-4 lg:px-32 xl:px-64 py-[18px] flex justify-between items-center text-zinc-950 dark:text-white">
          <span className="text-xl font-semibold">J. DLCode</span>
          <ul className="flex items-center gap-10 max-md:hidden">
            {MENU_ITEMS.map(item => (
              <li
                key={item.title}
                onClick={() => handleScroll(item.sectionId)}
                className="inline-flex items-center cursor-pointer"
              >
                {item.title}
              </li>
            ))}
            <li className="inline-flex items-center cursor-pointer">
              <ToggleTheme />
            </li>
          </ul>
          <MobileMenu />
        </nav>
      </header>
    </>
  )
}
