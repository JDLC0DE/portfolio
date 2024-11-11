import { ProjectCard } from '@/components/blocks/ProjectCard'
import { PROJECTS } from '@integration/data/constants/projects'
import Link from 'next/link'

export const ProjectCardList = () => {
  return (
    <div className="mt-7 grid grid-cols-2 gap-[30px]">
      {PROJECTS.map(project => (
        <Link key={project.title} href={project.url} target="_blank">
          <ProjectCard title={project.title} image={project.image} />
        </Link>
      ))}
    </div>
  )
}
