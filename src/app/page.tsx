"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SkillsMarquee from "@/components/SkillsMarquee";
import ProjectCard from "@/components/ProjectCard";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/data/translations";
import { projectsData } from "@/data/projects";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HomePage() {
  const { lang } = useLang();
  const t = translations[lang];
  const projects = projectsData[lang].slice(0, 6);

  return (
    <>
      <Navbar />
      <main className="pt-[68px]">

        {/* ── HERO ── */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-center py-12 lg:py-[72px] lg:pb-14">

            {/* Left */}
            <div>
              <motion.div {...fadeUp(0.05)}>
                <div className="inline-flex items-center gap-2 bg-white border border-[#e2eaf0] rounded-full px-4 py-1.5 text-[12px] font-semibold text-[#4a6580] tracking-[.04em] uppercase mb-5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot shrink-0" />
                  {t.hero_tag}
                </div>
              </motion.div>

              <motion.h1 {...fadeUp(0.1)}
                className="text-[clamp(44px,8vw,76px)] font-black text-[#0a4264] leading-[1.03] tracking-[-2px] mb-3">
                Devesh<br /><span className="text-[#ff6900]">Arya</span>
              </motion.h1>

              <motion.p {...fadeUp(0.15)} className="text-[16px] sm:text-[18px] font-semibold text-[#ff6900] mb-5 tracking-tight">
                {t.hero_sub}
              </motion.p>

              <motion.p {...fadeUp(0.2)}
                className="text-[15px] sm:text-[16px] leading-[1.75] text-[#4a6580] max-w-[500px] mb-8"
                dangerouslySetInnerHTML={{ __html: t.hero_bio }} />

              <motion.div {...fadeUp(0.25)} className="flex gap-3 flex-wrap">
                <Link href="/projects"
                  className="bg-[#ff6900] text-white px-6 py-3 rounded-full text-[14px] font-bold hover:bg-[#e55e00] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,105,0,.3)] transition-all duration-200">
                  {t.hero_btn1}
                </Link>
                <Link href="/connect"
                  className="bg-transparent text-[#0a4264] border-[1.5px] border-[#e2eaf0] px-6 py-3 rounded-full text-[14px] font-bold hover:border-[#0a4264] hover:bg-[#e8f0f6] hover:-translate-y-0.5 transition-all duration-200">
                  {t.hero_btn2}
                </Link>
              </motion.div>
            </div>

            {/* Right — stats (hidden on mobile, shown md+) */}
            <motion.div {...fadeUp(0.15)} className="hidden lg:flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#ff6900] rounded-[14px] p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                  <div className="text-[32px] font-black text-white leading-none mb-1.5 tracking-tight">5+</div>
                  <div className="text-[11px] font-semibold text-white/80 uppercase tracking-[.06em]">{t.stat_l1}</div>
                </div>
                <div className="bg-white border border-[#e2eaf0] rounded-[14px] p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                  <div className="text-[32px] font-black text-[#0a4264] leading-none mb-1.5 tracking-tight">7+</div>
                  <div className="text-[11px] font-semibold text-[#7a95a8] uppercase tracking-[.06em]">{t.stat_l2}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#e2eaf0] rounded-[14px] p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                  <div className="text-[22px] font-black text-[#0a4264] leading-none mb-1.5">React.js</div>
                  <div className="text-[11px] font-semibold text-[#7a95a8] uppercase tracking-[.06em]">{t.stat_l3}</div>
                </div>
                <div className="bg-white border border-[#e2eaf0] rounded-[14px] p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                  <div className="text-[22px] font-black text-[#0a4264] leading-none mb-1.5">A11y</div>
                  <div className="text-[11px] font-semibold text-[#7a95a8] uppercase tracking-[.06em]">{t.stat_l4}</div>
                </div>
              </div>
              <div className="bg-white border border-[#e2eaf0] rounded-[14px] p-4 flex items-center gap-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-full bg-[#e8f0f6] flex items-center justify-center shrink-0 text-[#0a4264]">
                  <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#0a4264]">{t.loc_text}</div>
                  <div className="text-[12px] text-[#7a95a8] mt-0.5">604-365-3413 · devarya5295@gmail.com</div>
                </div>
              </div>
            </motion.div>

            {/* Mobile stats row */}
            <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-3 lg:hidden">
              <div className="bg-[#ff6900] rounded-[14px] p-4">
                <div className="text-[28px] font-black text-white leading-none mb-1">5+</div>
                <div className="text-[10px] font-semibold text-white/80 uppercase tracking-[.06em]">{t.stat_l1}</div>
              </div>
              <div className="bg-white border border-[#e2eaf0] rounded-[14px] p-4">
                <div className="text-[28px] font-black text-[#0a4264] leading-none mb-1">7+</div>
                <div className="text-[10px] font-semibold text-[#7a95a8] uppercase tracking-[.06em]">{t.stat_l2}</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── SKILLS MARQUEE ── */}
        <SkillsMarquee />

        {/* ── FEATURED PROJECTS ── */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 mt-12 lg:mt-16">
          <motion.div {...fadeUp(0.05)}>
            <p className="text-[11px] font-bold tracking-[.16em] uppercase text-[#ff6900] mb-2">{t.home_proj_label}</p>
            <div className="flex justify-between items-center mb-6 lg:mb-8 gap-4">
              <h2 className="text-[clamp(24px,4vw,40px)] font-black text-[#0a4264] tracking-tight">{t.home_proj_title}</h2>
              <Link href="/projects"
                className="shrink-0 bg-transparent text-[#0a4264] border-[1.5px] border-[#e2eaf0] px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-bold hover:border-[#0a4264] hover:bg-[#e8f0f6] transition-all duration-200">
                {t.home_proj_viewall}
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} variant="mini" index={i} />
            ))}
          </div>

          {/* ── CONNECT TEASER ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0a4264] rounded-2xl p-6 sm:p-10 lg:p-14 mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[.16em] uppercase text-[#ff6900] mb-3">{t.hc_tag}</p>
              <h2 className="text-[clamp(22px,4vw,36px)] font-black text-white leading-tight tracking-tight mb-4">{t.hc_title}</h2>
              <p className="text-[14px] sm:text-[15px] text-white/60 leading-[1.65] mb-6 sm:mb-7">{t.hc_body}</p>
              <Link href="/connect"
                className="inline-block bg-[#ff6900] text-white px-6 py-3 rounded-full text-[14px] font-bold hover:bg-[#e55e00] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,105,0,.3)] transition-all duration-200">
                {t.hc_btn}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {[
                { icon: "💼", t: t.hc1_t, s: t.hc1_s },
                { icon: "⚡", t: t.hc2_t, s: t.hc2_s },
                { icon: "🚀", t: t.hc3_t, s: t.hc3_s },
                { icon: "⏱", t: t.hc4_t, s: t.hc4_s },
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.08] border border-white/10 rounded-xl px-4 py-3.5 flex items-center gap-3">
                  <span className="text-[20px] shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-[13px] sm:text-[14px] font-bold text-white">{item.t}</div>
                    <div className="text-[11px] sm:text-[12px] text-white/50 mt-0.5">{item.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
