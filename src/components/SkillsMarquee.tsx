"use client";

const SKILLS = [
  "React.js", "Next.js", "TypeScript", "Redux", "JavaScript ES6+",
  "Tailwind CSS", "HTML5", "CSS3", "Sass", "REST APIs", "Git",
  "Accessibility (a11y)", "PHP", "WordPress", "Jest", "Cypress",
  "Framer Motion", "Agile / Scrum", "Performance Opt.", "CI/CD",
  "PostgreSQL", "MySQL", "Webflow", "Azure DevOps",
];

export default function SkillsMarquee() {
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <div className="overflow-hidden py-1">
      <div className="flex gap-3 w-max animate-marquee">
        {doubled.map((skill, i) => (
          <div key={i} className="skill-chip">
            <span className="gradient-text">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
