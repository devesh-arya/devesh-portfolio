"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/data/translations";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const { lang } = useLang();
  const t = translations[lang];
  const projects = projectsData[lang];
  const [featured, ...rest] = projects;

  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            className="text-[12px] font-bold tracking-[.16em] uppercase text-[#ff6900] mb-2">
            {t.proj_label}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[clamp(28px,5vw,48px)] font-black text-[#0a4264] tracking-tight mb-2">
            {t.proj_title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[14px] sm:text-[16px] text-[#4a6580] mb-8 sm:mb-12 max-w-[540px] leading-relaxed">
            {t.proj_sub}
          </motion.p>

          {/* Featured */}
          <ProjectCard project={featured} variant="featured" index={0} />

          {/* Grid — responsive: 1 col mobile, 2 col md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rest.map((project, j) => (
              <ProjectCard key={project.slug} project={project} variant="grid" index={j + 1} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
