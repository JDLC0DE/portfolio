'use client'

import Link from 'next/link'
import { FC } from 'react'

import { MobileMenu } from './parts/MobileMenu'
import { MENU_ITEMS } from '@/data/constants/navbar'
import { ToggleTheme } from './parts/ToggleTheme'

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
                className="inline-flex items-center cursor-pointer"
              >
                <Link href={item.link}>{item.title}</Link>
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
