import { useMemo } from 'react'
import Link from 'next/link'

import { Carousel } from '@/components/blocks/Carousel'
import { ProjectCard } from '@/components/blocks/ProjectCard'
import { PROJECTS } from '@integration/data/constants/projects'

export const ProjectCardList = () => {
  const slides = useMemo(
    () =>
      PROJECTS.map(project => (
        <Link key={project.title} href={project.url} target="_blank">
          <ProjectCard title={project.title} image={project.image} />
        </Link>
      )),
    []
  ) as JSX.Element[]

  return <Carousel slides={slides} options={{ slidesToScroll: 'auto' }} />
}
