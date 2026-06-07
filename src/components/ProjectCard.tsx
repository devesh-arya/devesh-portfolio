"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/data/translations";
import { projectImages } from "@/data/images";

interface Props {
  project: Project;
  variant?: "featured" | "grid" | "mini";
  index?: number;
}

export default function ProjectCard({ project, variant = "grid", index = 0 }: Props) {
  const { lang } = useLang();
  const t = translations[lang];
  const imgSrc = project.imgType === "img" && project.imgKey ? projectImages[project.imgKey] : null;

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] } },
  };

  if (variant === "mini") {
    return (
      <motion.div variants={cardVariants} initial="hidden" animate="visible">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="bg-white border border-[#e2eaf0] rounded-[18px] overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(10,66,100,0.12)]">
            <div className="h-[140px] sm:h-[180px] overflow-hidden relative">
              {imgSrc ? (
                <Image src={imgSrc} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full" style={{ background: project.imgGrad }} />
              )}
            </div>
            <div className="p-4 sm:p-5">
              <div className="text-[10px] font-bold tracking-[.08em] uppercase text-[#7a95a8] mb-1.5">{project.tagText}</div>
              <div className="text-[15px] sm:text-[17px] font-extrabold text-[#0a4264] leading-snug">{project.name}</div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  if (variant === "featured") {
    return (
      <motion.div variants={cardVariants} initial="hidden" animate="visible">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="bg-white border border-[#e2eaf0] rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1.1fr] group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(10,66,100,0.1)] mb-5 sm:mb-6">
            <div className="relative overflow-hidden h-[200px] md:h-auto md:min-h-[240px]">
              {imgSrc ? (
                <Image src={imgSrc} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full" style={{ background: project.imgGrad }} />
              )}
            </div>
            <div className="p-6 sm:p-8 lg:p-9">
              <span className={`inline-block rounded-full px-[14px] py-1 text-[11px] font-bold tracking-[.06em] uppercase mb-4 ${project.tag}`}>
                {project.tagText}
              </span>
              <h3 className="text-[20px] sm:text-[24px] font-black text-[#0a4264] mb-2.5 leading-tight tracking-tight">{project.name}</h3>
              <p className="text-[13px] sm:text-[14px] leading-[1.72] text-[#4a6580] mb-4 sm:mb-5">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.pills.map((pill) => (
                  <span key={pill} className="bg-[#f7f8fa] border border-[#e2eaf0] rounded-full px-3 py-1 text-[11px] sm:text-[12px] font-medium text-[#4a6580]">{pill}</span>
                ))}
              </div>
              <div className="mt-4 sm:mt-5 text-[13px] font-bold text-[#ff6900] flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                {t.read_cs}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Grid variant
  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="bg-white border border-[#e2eaf0] rounded-[20px] overflow-hidden h-full group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(10,66,100,0.1)]">
          <div className="h-[140px] sm:h-[160px] relative overflow-hidden">
            {imgSrc ? (
              <Image src={imgSrc} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="w-full h-full" style={{ background: project.imgGrad }} />
            )}
          </div>
          <div className="p-5 sm:p-6">
            <span className={`inline-block rounded-full px-[14px] py-1 text-[11px] font-bold tracking-[.06em] uppercase mb-3 ${project.tag}`}>
              {project.tagText}
            </span>
            <h3 className="text-[17px] sm:text-[19px] font-black text-[#0a4264] mb-2 leading-tight tracking-tight">{project.name}</h3>
            <p className="text-[13px] leading-[1.7] text-[#4a6580] mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.pills.map((pill) => (
                <span key={pill} className="bg-[#f7f8fa] border border-[#e2eaf0] rounded-full px-3 py-1 text-[11px] sm:text-[12px] font-medium text-[#4a6580]">{pill}</span>
              ))}
            </div>
            <div className="text-[13px] font-bold text-[#ff6900] flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
              {t.read_cs}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
