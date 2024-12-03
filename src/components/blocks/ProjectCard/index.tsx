import { FC } from 'react'
import Image from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md'

interface ProjectCardProps {
  image: string
  title: string
}

export const ProjectCard: FC<ProjectCardProps> = ({ title, image }) => {
  return (
    <div className="h-[300px] w-full rounded-[18px] cursor-pointer overflow-hidden">
      <picture className="block w-full h-[80%] rounded-t-[inherit] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={390}
          height={235}
          className="w-full h-full rounded-t-[inherit] object-fill duration-500 hover:scale-[1.2]"
        />
      </picture>
      <div className="bg-gray-A200 flex justify-between items-center h-[20%] rounded-b-[inherit] px-6 py-[14px]">
        <div className="flex flex-col">
          <span className="text-gray-A100 uppercase text-[0.625rem] font-extrabold">
            Click aquí para visitar
          </span>
          <span className="text-white uppercase text-xl font-extrabold">
            {title}
          </span>
        </div>
        <MdOutlineArrowOutward className="text-xl text-white" />
      </div>
    </div>
  )
}
