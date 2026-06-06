"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/data/translations";
import { projectsData } from "@/data/projects";
import { projectImages } from "@/data/images";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLang();
  const t = translations[lang];
  const projects = projectsData[lang];
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const { cs } = project;
  const imgSrc = project.imgType === "img" && project.imgKey ? projectImages[project.imgKey] : null;

  const boxClass: Record<string, string> = {
    b1: "cs-box-b1",
    b2: "cs-box-b2",
    b3: "cs-box-b3 col-span-2",
  };

  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <div className="max-w-[1100px] mx-auto px-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="pt-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-[#4a6580] bg-white border border-[#e2eaf0] px-4 py-2 rounded-full hover:text-[#0a4264] hover:bg-[#e8f0f6] transition-all duration-200"
            >
              {t.back_projects}
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0a4264] rounded-[20px] p-14 mt-6"
          >
            <p className="text-[11px] font-bold tracking-[.14em] uppercase text-[#ff6900] mb-4">{cs.tag}</p>
            <h1 className="text-[clamp(30px,4vw,52px)] font-black text-white leading-[1.08] tracking-tight mb-5">{cs.title}</h1>
            <p className="text-[17px] leading-[1.7] text-white/60 max-w-[600px] mb-10">{cs.subtitle}</p>
            <div className="flex gap-10 flex-wrap pt-7 border-t border-white/10">
              {cs.meta.map((m) => (
                <div key={m.lbl}>
                  <div className="text-[11px] tracking-[.1em] uppercase text-white/40 mb-1">{m.lbl}</div>
                  <div className="text-[14px] font-bold text-white">{m.val}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-8 rounded-2xl overflow-hidden"
          >
            {imgSrc ? (
              <div className="relative w-full h-[320px]">
                <Image src={imgSrc} alt={project.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-full h-[200px]" style={{ background: project.imgGrad }} />
            )}
          </motion.div>

          {/* Sections */}
          <div className="mt-12 pb-20">
            {cs.sections.map((section, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + si * 0.08 }}
                className="mb-14"
              >
                <p className="text-[11px] font-bold tracking-[.14em] uppercase text-[#ff6900] mb-2.5">{section.slabel}</p>
                <h2 className="text-[22px] font-extrabold text-[#0a4264] mb-3 tracking-tight">{section.stitle}</h2>
                <p className="text-[15px] leading-[1.78] text-[#4a6580]">{section.stext}</p>

                {section.callout && (
                  <div
                    className="bg-white border border-[#e2eaf0] border-l-[4px] border-l-[#ff6900] rounded-r-[10px] px-6 py-5 mt-5 text-[15px] leading-[1.65] text-[#4a6580]"
                    dangerouslySetInnerHTML={{ __html: section.callout }}
                  />
                )}

                {section.boxes && (
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    {section.boxes.map((box, bi) => (
                      <div key={bi} className={`rounded-[14px] p-7 ${boxClass[box.cls] ?? ""}`}>
                        <div className="text-[15px] font-extrabold text-[#0a4264] mb-2.5">{box.title}</div>
                        <p className="text-[14px] leading-[1.7] text-[#4a6580]">{box.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.role && (
                  <div className="cs-box-b3 rounded-[14px] p-7 mt-4">
                    <div className="text-[15px] font-extrabold text-[#0a4264] mb-2.5">🎯 {lang === "fr" ? "Mon rôle" : "My Role"}</div>
                    <p className="text-[14px] leading-[1.7] text-[#4a6580] mb-4">{section.role.text}</p>
                    <ul className="list-none p-0 flex flex-col gap-2">
                      {section.role.items.map((item, ii) => (
                        <li key={ii} className="text-[14px] text-[#4a6580] pl-4 relative leading-snug before:content-['·'] before:absolute before:left-0.5 before:text-[#ff6900] before:text-xl before:leading-[14px] before:top-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-[#4a6580] bg-white border border-[#e2eaf0] px-4 py-2 rounded-full hover:text-[#0a4264] hover:bg-[#e8f0f6] transition-all duration-200"
            >
              {t.back_projects}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
