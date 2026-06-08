"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/data/translations";

const SKILLS = [
  "React.js","Next.js","TypeScript","Redux","JavaScript ES6+",
  "Tailwind CSS","HTML5","CSS3","Sass","REST APIs","Fetch / Axios",
  "Git & Bitbucket","Azure DevOps","CI/CD","WordPress","PHP",
  "MySQL","PostgreSQL","Jest","Cypress","Framer Motion",
  "Agile / Scrum","Accessibility (a11y)","Performance Opt.",
  "Code Splitting","Lazy Loading","Webflow",
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
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20">
          <motion.div {...fadeUp(0.0)}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#ff6900] to-[#ff9a4a] flex items-center justify-center text-[28px] sm:text-[32px] mb-6 shadow-[0_4px_16px_rgba(255,105,0,.25)] border-[3px] border-white">
              👨‍💻
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="max-w-[760px] mb-4 space-y-4">
            <p className="text-[15px] sm:text-[17px] font-medium leading-[1.78] text-[#005677]"
              dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
            <p className="text-[15px] sm:text-[17px] font-medium leading-[1.78] text-[#005677]"
              dangerouslySetInnerHTML={{ __html: t.about_p2 }} />
            <p className="text-[15px] sm:text-[17px] font-medium leading-[1.78] text-[#005677]"
              dangerouslySetInnerHTML={{ __html: t.about_p3 }} />
          </motion.div>

          {/* Experience */}
          <motion.h2 {...fadeUp(0.1)} className="text-[22px] sm:text-[26px] font-extrabold text-[#0a4264] mt-12 sm:mt-14 mb-5 sm:mb-7 tracking-tight">
            {t.exp_title}
          </motion.h2>
          <motion.div {...fadeUp(0.15)} className="border-t border-[#e2eaf0]">
            <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 py-6 sm:py-7">
              <div className="text-[15px] font-semibold text-[#005677] pt-0 sm:pt-1">2021 – Present</div>
              <div>
                <div className="text-[15px] sm:text-[16px] font-extrabold text-[#0a4264] mb-0.5">{t.exp_role}</div>
                <div className="text-[14px] sm:text-[16px] font-semibold text-[#ff6900] mb-1">{t.exp_co}</div>
                <div className="text-[12px] sm:text-[13px] text-[#005677] mb-2.5">{t.exp_dur}</div>
                <div className="text-[14px] sm:text-[16px] leading-[1.5] text-[#005677]">{t.exp_desc}</div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.h2 {...fadeUp(0.2)} className="text-[22px] sm:text-[26px] font-extrabold text-[#0a4264] mt-10 sm:mt-12 mb-5 sm:mb-7 tracking-tight">
            {t.edu_title}
          </motion.h2>
          <motion.div {...fadeUp(0.25)} className="border-t border-[#e2eaf0]">
            <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 py-6 sm:py-7">
              <div className="text-[15px] font-semibold text-[#005677]">2013–2017</div>
              <div>
                <div className="text-[15px] sm:text-[16px] font-extrabold text-[#0a4264] mb-0.5">{t.edu_role}</div>
                <div className="text-[14px] sm:text-[16px] font-semibold text-[#ff6900] mb-1">{t.edu_co}</div>
                <div className="text-[13px] sm:text-[14px] text-[#005677] mb-2.5">{t.edu_dur}</div>
                <div className="text-[14px] sm:text-[16px] leading-[1.5] text-[#005677]">{t.edu_desc}</div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.h2 {...fadeUp(0.3)} className="text-[22px] sm:text-[26px] font-extrabold text-[#0a4264] mt-10 sm:mt-12 mb-5 sm:mb-7 tracking-tight">
            {t.skills_title}
          </motion.h2>
          <motion.div {...fadeUp(0.35)}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2 sm:gap-2.5">
            {SKILLS.map((skill) => (
              <div key={skill}
                className="bg-white border border-[#e2eaf0] rounded-lg px-3 py-2.5 text-[12px] sm:text-[13px] font-semibold text-[#0a4264] text-center transition-all duration-200 hover:bg-[#ff6900] hover:border-[#ff6900] hover:text-white hover:scale-[1.04] cursor-default">
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
}
