import { ProjectCardList } from './parts/ProjectCardList'

export const Projects = () => {
  return (
    <section id="projects" className="mt-24 flex flex-col items-center">
      <h3 className="text-3xl md:text-4xl mb-[27px] font-extrabold text-blue-400">
        Proyectos
      </h3>
      <ProjectCardList />
    </section>
  )
}
