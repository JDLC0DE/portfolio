import Link from "next/link";

import { SOCIAL } from "@/components/common/Footer/utils/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-zinc-900">
      <div className="container mx-auto px-4 lg:px-32 xl:px-64">
        <div className="flex flex-col md:flex-row-reverse gap-10 justify-between py-10 md:py-20">
          <div className="space-y-5">
            <h4 className="text-white text-lg md:text-xl uppercase font-bold">
              Social
            </h4>
            <ul className="flex gap-3 md:gap-4 items-center text-white">
              {SOCIAL.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <li key={social.key} className="text-2xl">
                    <Link href={social.link} target="__blank">
                      <SocialIcon />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-5 max-w-[28rem]">
            <h4 className="text-white text-lg md:text-xl uppercase font-bold">
              Joseph De La Cruz
            </h4>
            <p className="text-white text-xs md:text-sm">
              Un desarrollador web centrado en el frontend que construye el
              frontend de sitios web y aplicaciones web que conduce al éxito del
              producto general.
            </p>
          </div>
        </div>
        <div className="text-white text-[10px] md:text-xs text-center py-8 border-t border-t-zinc-600">
          @Copyrigth {currentYear}. Hecho por{" "}
          <b className="font-bold">Joseph De La Cruz</b>
        </div>
      </div>
    </footer>
  );
};
