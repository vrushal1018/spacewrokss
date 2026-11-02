"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#F3F1EC]/95 backdrop-blur-md border-b border-rule/50 transition-all duration-200">
      <div className="wrap flex items-center justify-between h-[84px] md:h-[104px]">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Ina SpaceWorks, home"
          className="flex items-center group py-2"
        >
          <Logo className="w-[130px] md:w-[170px] h-auto transition-transform duration-200 group-hover:opacity-90" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Main"
        >
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[16px] tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? "text-tab font-medium"
                    : "text-ink hover:text-tab"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-tab" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center px-5 py-2.5 bg-tab hover:bg-ink text-white text-[14px] font-medium tracking-wide uppercase transition-colors duration-200"
          >
            Start a project
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-blue"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            aria-hidden="true"
            className="transition-transform duration-200"
          >
            {menuOpen ? (
              <>
                <line
                  x1="2"
                  y1="2"
                  x2="24"
                  y2="16"
                  stroke="#1B1F24"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="2"
                  y1="16"
                  x2="24"
                  y2="2"
                  stroke="#2495D3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <line x1="0" y1="1" x2="26" y2="1" stroke="#1B1F24" strokeWidth="2" />
                <line x1="0" y1="9" x2="26" y2="9" stroke="#1B1F24" strokeWidth="2" />
                <line x1="8" y1="17" x2="26" y2="17" stroke="#2495D3" strokeWidth="2" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-rule bg-white px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            <Link
              href="/"
              className={`text-lg py-2 border-b border-rule/40 ${
                pathname === "/" ? "text-tab font-medium" : "text-ink"
              }`}
            >
              Home
            </Link>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg py-2 border-b border-rule/40 ${
                  pathname === item.href ? "text-tab font-medium" : "text-ink"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-block text-center py-3 px-4 bg-tab text-white font-medium text-sm tracking-wide uppercase"
              >
                Start a project
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

