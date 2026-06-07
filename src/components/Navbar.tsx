"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/data/translations";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggle } = useLang();
  const t = translations[lang];
  const isFr = lang === "fr";
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-white/95 backdrop-blur-md border-b border-[#e2eaf0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-[20px] font-black text-[#ff6900] tracking-tight hover:opacity-80 transition-opacity shrink-0">
            DA.
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex justify-center gap-1 list-none">
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

          {/* Desktop right icons */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border-[1.5px] border-[#e2eaf0] flex items-center justify-center text-[#ff6900] hover:bg-[#ff6900] hover:text-white hover:border-[#ff6900] transition-all duration-200" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:devarya5295@gmail.com"
              className="w-9 h-9 rounded-full border-[1.5px] border-[#e2eaf0] flex items-center justify-center text-[#ff6900] hover:bg-[#ff6900] hover:text-white hover:border-[#ff6900] transition-all duration-200" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <button onClick={toggle} aria-label="Toggle language"
              className="ml-1 flex items-center gap-[7px] bg-white border-[1.5px] border-[#e2eaf0] rounded-full px-3 py-[5px] cursor-pointer hover:border-[#ff6900] transition-all duration-200 select-none">
              <span className={`text-[12px] font-bold tracking-widest transition-colors duration-200 ${!isFr ? "text-[#ff6900]" : "text-[#7a95a8]"}`}>EN</span>
              <div className={`w-7 h-4 rounded-full relative transition-colors duration-200 ${isFr ? "bg-[#ff6900]" : "bg-[#e2eaf0]"}`}>
                <div className={`w-3 h-3 rounded-full absolute top-[2px] transition-all duration-300 ${isFr ? "bg-white translate-x-[14px]" : "bg-[#ff6900] translate-x-[2px]"}`} />
              </div>
              <span className={`text-[12px] font-bold tracking-widest transition-colors duration-200 ${isFr ? "text-[#ff6900]" : "text-[#7a95a8]"}`}>FR</span>
            </button>
          </div>

          {/* Mobile right: lang toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggle} aria-label="Toggle language"
              className="flex items-center gap-1.5 bg-white border-[1.5px] border-[#e2eaf0] rounded-full px-2.5 py-1 cursor-pointer hover:border-[#ff6900] transition-all duration-200 select-none">
              <span className={`text-[11px] font-bold ${!isFr ? "text-[#ff6900]" : "text-[#7a95a8]"}`}>EN</span>
              <div className={`w-6 h-3.5 rounded-full relative transition-colors duration-200 ${isFr ? "bg-[#ff6900]" : "bg-[#e2eaf0]"}`}>
                <div className={`w-2.5 h-2.5 rounded-full absolute top-[2px] transition-all duration-300 ${isFr ? "bg-white translate-x-[12px]" : "bg-[#ff6900] translate-x-[2px]"}`} />
              </div>
              <span className={`text-[11px] font-bold ${isFr ? "text-[#ff6900]" : "text-[#7a95a8]"}`}>FR</span>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
              className="w-9 h-9 rounded-full border-[1.5px] border-[#e2eaf0] flex items-center justify-center text-[#0a4264] hover:bg-[#e8f0f6] transition-all duration-200">
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div className="absolute top-[68px] left-0 right-0 bg-white border-b border-[#e2eaf0] shadow-xl px-5 py-4"
            onClick={(e) => e.stopPropagation()}>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}
                    className={`block text-[15px] font-semibold px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive(link.href) ? "text-[#ff6900] bg-orange-50" : "text-[#4a6580] hover:text-[#0a4264] hover:bg-[#e8f0f6]"
                    }`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-4 pt-4 border-t border-[#e2eaf0]">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#e2eaf0] flex items-center justify-center text-[#ff6900] hover:bg-[#ff6900] hover:text-white transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="mailto:devarya5295@gmail.com"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#e2eaf0] flex items-center justify-center text-[#ff6900] hover:bg-[#ff6900] hover:text-white transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
