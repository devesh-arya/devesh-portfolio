"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/data/translations";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggle } = useLang();
  const t = translations[lang];
  const isFr = lang === "fr";

  const navLinks = [
    { href: "/", label: t.nav_home, key: "home" },
    { href: "/projects", label: t.nav_projects, key: "projects" },
    { href: "/about", label: t.nav_about, key: "about" },
    { href: "/connect", label: t.nav_connect, key: "connect" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-white/95 backdrop-blur-md border-b border-[#e2eaf0]">
      <div className="max-w-[1100px] mx-auto px-10 h-full grid grid-cols-[160px_1fr_200px] items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] font-black text-[#ff6900] tracking-tight hover:opacity-80 transition-opacity"
        >
          DA.
        </Link>

        {/* Nav links */}
        <ul className="flex justify-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={`text-[14px] font-medium px-4 py-[7px] rounded-full transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#ff6900] font-bold bg-orange-50"
                    : "text-[#4a6580] hover:text-[#0a4264] hover:bg-[#e8f0f6]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons + Lang toggle */}
        <div className="flex items-center justify-end gap-2">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-[1.5px] border-[#e2eaf0] flex items-center justify-center text-[#ff6900] hover:bg-[#ff6900] hover:text-white hover:border-[#ff6900] transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-[1.5px] border-[#e2eaf0] flex items-center justify-center text-[#ff6900] hover:bg-[#ff6900] hover:text-white hover:border-[#ff6900] transition-all duration-200"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:devarya5295@gmail.com"
            className="w-9 h-9 rounded-full border-[1.5px] border-[#e2eaf0] flex items-center justify-center text-[#ff6900] hover:bg-[#ff6900] hover:text-white hover:border-[#ff6900] transition-all duration-200"
            aria-label="Email"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="ml-1 flex items-center gap-[7px] bg-white border-[1.5px] border-[#e2eaf0] rounded-full px-3 py-[5px] cursor-pointer hover:border-[#ff6900] transition-all duration-200 select-none"
          >
            <span className={`text-[12px] font-bold tracking-widest transition-colors duration-200 ${!isFr ? "text-[#ff6900]" : "text-[#7a95a8]"}`}>
              EN
            </span>
            <div className={`w-7 h-4 rounded-full relative transition-colors duration-200 ${isFr ? "bg-[#ff6900]" : "bg-[#e2eaf0]"}`}>
              <div
                className={`w-3 h-3 rounded-full absolute top-[2px] transition-all duration-300 ${
                  isFr ? "bg-white translate-x-[14px]" : "bg-[#ff6900] translate-x-[2px]"
                }`}
              />
            </div>
            <span className={`text-[12px] font-bold tracking-widest transition-colors duration-200 ${isFr ? "text-[#ff6900]" : "text-[#7a95a8]"}`}>
              FR
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
