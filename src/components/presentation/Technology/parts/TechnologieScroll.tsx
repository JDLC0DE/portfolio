import Image from 'next/image'

import { TECHNOLOGIES } from '@/data/constants/technologies'
import { useDarkMode } from '@/hooks/useDarkMode'

export const TechnologieScroll = () => {
  const [theme] = useDarkMode()
  return (
    <ul className="flex justify-center items-center gap-[60.45px] animate-infinite-scroll">
      {TECHNOLOGIES.map(tech => (
        <li key={tech.name} className="flex-none">
          <Image
            src={tech.src[theme ?? 'dark']}
            alt={tech.alt}
            width={42}
            height={42}
          />
        </li>
      ))}
    </ul>
  )
}
