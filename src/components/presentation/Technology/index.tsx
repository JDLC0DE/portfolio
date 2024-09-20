'use client'
import { TechnologieScroll } from '../Technology/parts/TechnologieScroll'

export const Technology = () => {
  return (
    <div className="max-w-[30rem] overflow-hidden mx-auto mt-[88px]">
      <h5 className="font-semibold text-xl tracking-[2.4px] text-zinc-950 dark:text-white text-center mb-12">
        Experiencia con
      </h5>
      <TechnologieScroll />
    </div>
  )
}
