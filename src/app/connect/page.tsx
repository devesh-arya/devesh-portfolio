"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/data/translations";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

function DotsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight || 700;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width, H = canvas.height;

    const dots = Array.from({ length: 48 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    parent.addEventListener("mousemove", onMouseMove);

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
        const dist = Math.hypot(d.x - mouseRef.current.x, d.y - mouseRef.current.y);
        if (dist < 80) { d.x += (d.x - mouseRef.current.x) * 0.03; d.y += (d.y - mouseRef.current.y) * 0.03; }
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(10,66,100,${(1 - dist / 120) * 0.08})`;
            ctx.lineWidth = 1;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,105,0,0.18)";
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); parent.removeEventListener("mousemove", onMouseMove); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

function Terminal({ lang }: { lang: "en" | "fr" }) {
  const [lines, setLines] = useState<{ type: "cmd" | "out" | "loading"; text: string }[]>([]);
  const [typed, setTyped] = useState("");
  const cmd = "why_hire_devesh";

  const termLines = lang === "fr"
    ? ["✓ 5+ ans d'expérience frontend", "✓ Expert React, Next.js & TypeScript", "✓ WordPress & systèmes de design", "✓ Performance & accessibilité", "✓ Bilan entreprise éprouvé", "✓ Communication rapide"]
    : ["✓ 5+ Years Frontend Experience", "✓ React, Next.js & TypeScript Expert", "✓ WordPress & Design Systems", "✓ Performance & Accessibility Focus", "✓ Enterprise Client Track Record", "✓ Fast, Clear Communication"];

  useEffect(() => {
    setLines([]);
    setTyped("");
    let i = 0;
    const typeCmd = () => {
      if (i <= cmd.length) { setTyped(cmd.slice(0, i)); i++; setTimeout(typeCmd, 70); }
      else {
        setTimeout(() => {
          setLines([{ type: "loading", text: lang === "fr" ? "Chargement..." : "Loading..." }]);
          termLines.forEach((text, idx) => {
            setTimeout(() => setLines((prev) => [...prev, { type: "out", text }]), 600 + idx * 200);
          });
        }, 300);
      }
    };
    const t = setTimeout(typeCmd, 400);
    return () => clearTimeout(t);
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-[#0d1117] rounded-[14px] overflow-hidden font-mono">
      <div className="bg-[#21262d] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[12px] text-[#8b949e]">devesh@portfolio ~ </span>
      </div>
      <div className="p-5 text-[13px] leading-[1.8] min-h-[180px]">
        <div className="text-[#8b949e]">
          $ <span className="text-[#79c0ff]">{typed}</span>
          {typed.length <= cmd.length && lines.length === 0 && (
            <span className="inline-block w-2 h-3.5 bg-[#79c0ff] animate-term-cursor align-middle ml-0.5" />
          )}
        </div>
        {lines.map((line, i) => (
          <div key={i} className={line.type === "loading" ? "text-[#8b949e] mt-1" : "text-[#3fb950] animate-[slideIn_.3s_ease_both]"}>
            {line.type === "out" ? (
              <><span className="text-[#ff6900] font-bold">✓</span> <span className="text-[#e6edf3]">{line.text.replace("✓ ", "")}</span></>
            ) : line.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConnectPage() {
  const { lang } = useLang();
  const t = translations[lang];

  const links = [
    { label: t.con1_t, sub: t.con1_s, href: "mailto:devarya5295@gmail.com" },
    { label: t.con2_t, sub: t.con2_s, href: "tel:6043653413" },
    { label: t.con3_t, sub: t.con3_s, href: "https://linkedin.com" },
    { label: t.con4_t, sub: t.con4_s, href: "#" },
  ];

  const whyItems = [t.why1, t.why2, t.why3, t.why4, t.why5];
  const availItems = [t.avail1, t.avail2, t.avail3];

  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <div className="max-w-[1100px] mx-auto px-10 relative">
          <DotsCanvas />
          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-12 pt-16 pb-20">
              {/* Left */}
              <div>
                <motion.p {...fadeUp(0.0)} className="text-[11px] font-bold tracking-[.16em] uppercase text-[#ff6900] mb-3">
                  {t.connect_label}
                </motion.p>
                <motion.h1
                  {...fadeUp(0.05)}
                  className="text-[clamp(36px,4.5vw,60px)] font-black text-[#0a4264] leading-[1.05] tracking-tight mb-5"
                  dangerouslySetInnerHTML={{ __html: t.connect_h }}
                />
                <motion.p {...fadeUp(0.1)} className="text-[16px] text-[#4a6580] leading-[1.65] max-w-[420px] mb-10">
                  {t.connect_sub}
                </motion.p>
                <motion.div {...fadeUp(0.15)} className="flex flex-col">
                  {links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-5 border-t border-[#e2eaf0] last:border-b text-inherit no-underline group transition-all duration-200 hover:pl-2.5"
                    >
                      <div>
                        <div className="text-[18px] font-extrabold text-[#0a4264]">{link.label}</div>
                        <div className="text-[13px] text-[#7a95a8] mt-0.5">{link.sub}</div>
                      </div>
                      <span className="text-[20px] font-bold text-[#ff6900] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Right */}
              <motion.div {...fadeUp(0.1)} className="flex flex-col gap-6">
                {/* Availability */}
                <div className="bg-white border border-[#e2eaf0] rounded-[18px] p-7">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-dot" />
                    <span className="text-[16px] font-extrabold text-[#0a4264]">{t.avail_title}</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {availItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[14px] text-[#4a6580]">
                        <span className="text-[#ff6900] font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#e2eaf0] text-[13px] text-[#7a95a8] flex items-center gap-1.5">
                    ⏱ {t.avail_rt} <strong className="text-[#0a4264] ml-1">{t.avail_rv}</strong>
                  </div>
                </div>

                {/* Why */}
                <div className="bg-[#0a4264] rounded-[18px] p-7">
                  <div className="text-[16px] font-extrabold text-white mb-5">{t.why_title}</div>
                  <ul className="flex flex-col gap-2.5">
                    {whyItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/75 leading-snug">
                        <span className="text-[#ff6900] font-bold flex-shrink-0 mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Terminal */}
                <Terminal lang={lang} />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
