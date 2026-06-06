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
        <div className="max-w-[1100px] mx-auto px-10 pt-16 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-bold tracking-[.16em] uppercase text-[#ff6900] mb-2"
          >
            {t.proj_label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[clamp(32px,4vw,48px)] font-black text-[#0a4264] tracking-tight mb-2"
          >
            {t.proj_title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[16px] text-[#4a6580] mb-12 max-w-[540px] leading-relaxed"
          >
            {t.proj_sub}
          </motion.p>

          {/* Featured */}
          <ProjectCard project={featured} variant="featured" index={0} />

          {/* Grid — pairs of 2 */}
          {Array.from({ length: Math.ceil(rest.length / 2) }, (_, i) => (
            <div key={i} className="grid grid-cols-2 gap-6 mb-6">
              {rest.slice(i * 2, i * 2 + 2).map((project, j) => (
                <ProjectCard key={project.slug} project={project} variant="grid" index={j + 1} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
