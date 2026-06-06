"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/data/translations";

const SKILLS = [
  "React.js", "Next.js", "TypeScript", "Redux", "JavaScript ES6+",
  "Tailwind CSS", "HTML5", "CSS3", "Sass", "REST APIs", "Fetch / Axios",
  "Git & Bitbucket", "Azure DevOps", "CI/CD", "WordPress", "PHP",
  "MySQL", "PostgreSQL", "Jest", "Cypress", "Framer Motion",
  "Agile / Scrum", "Accessibility (a11y)", "Performance Opt.",
  "Code Splitting", "Lazy Loading", "Webflow",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function AboutPage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <div className="max-w-[1100px] mx-auto px-10 pt-16 pb-20">
          {/* Avatar */}
          <motion.div {...fadeUp(0.0)}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff6900] to-[#ff9a4a] flex items-center justify-center text-[32px] mb-7 shadow-[0_4px_16px_rgba(255,105,0,.25)] border-[3px] border-white">
              👨‍💻
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div {...fadeUp(0.05)} className="max-w-[760px] mb-4">
            <p
              className="text-[17px] font-medium leading-[1.78] text-[#0a4264] mb-4"
              dangerouslySetInnerHTML={{ __html: t.about_p1 }}
            />
            <p
              className="text-[17px] font-medium leading-[1.78] text-[#0a4264] mb-4"
              dangerouslySetInnerHTML={{ __html: t.about_p2 }}
            />
            <p
              className="text-[17px] font-medium leading-[1.78] text-[#0a4264]"
              dangerouslySetInnerHTML={{ __html: t.about_p3 }}
            />
          </motion.div>

          {/* Experience */}
          <motion.h2 {...fadeUp(0.1)} className="text-[26px] font-extrabold text-[#0a4264] mt-14 mb-7 tracking-tight">
            {t.exp_title}
          </motion.h2>
          <motion.div {...fadeUp(0.15)} className="border-t border-[#e2eaf0]">
            <div className="grid grid-cols-[110px_1fr] gap-6 py-7">
              <div className="text-[13px] font-semibold text-[#7a95a8] pt-1 tabular-nums">2021</div>
              <div>
                <div className="text-[16px] font-extrabold text-[#0a4264] mb-0.5">{t.exp_role}</div>
                <div className="text-[14px] font-semibold text-[#ff6900] mb-1">{t.exp_co}</div>
                <div className="text-[13px] text-[#7a95a8] mb-2.5">{t.exp_dur}</div>
                <div className="text-[14px] leading-[1.7] text-[#4a6580]">{t.exp_desc}</div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.h2 {...fadeUp(0.2)} className="text-[26px] font-extrabold text-[#0a4264] mt-12 mb-7 tracking-tight">
            {t.edu_title}
          </motion.h2>
          <motion.div {...fadeUp(0.25)} className="border-t border-[#e2eaf0]">
            <div className="grid grid-cols-[110px_1fr] gap-6 py-7">
              <div className="text-[13px] font-semibold text-[#7a95a8] pt-1">2013–2017</div>
              <div>
                <div className="text-[16px] font-extrabold text-[#0a4264] mb-0.5">{t.edu_role}</div>
                <div className="text-[14px] font-semibold text-[#ff6900] mb-1">{t.edu_co}</div>
                <div className="text-[13px] text-[#7a95a8] mb-2.5">{t.edu_dur}</div>
                <div className="text-[14px] leading-[1.7] text-[#4a6580]">{t.edu_desc}</div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.h2 {...fadeUp(0.3)} className="text-[26px] font-extrabold text-[#0a4264] mt-12 mb-7 tracking-tight">
            {t.skills_title}
          </motion.h2>
          <motion.div
            {...fadeUp(0.35)}
            className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5"
          >
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="bg-white border border-[#e2eaf0] rounded-lg px-3.5 py-2.5 text-[13px] font-semibold text-[#0a4264] text-center transition-all duration-200 hover:bg-[#ff6900] hover:border-[#ff6900] hover:text-white hover:scale-[1.04] cursor-default"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
}
