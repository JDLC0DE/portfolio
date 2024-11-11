import { ProjectCardList } from './parts/ProjectCardList'

export const Projects = () => {
  return (
    <section className="mt-24 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400">
        Proyectos
      </h2>
      <ProjectCardList />
    </section>
  )
}
