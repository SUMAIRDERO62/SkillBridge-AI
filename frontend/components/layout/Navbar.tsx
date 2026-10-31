"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "../ui/Icons";

const navigation = [
  { id: "home", label: "Home", href: "/" },
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "progress", label: "Progress", href: "/progress" },
  { id: "roadmaps", label: "Roadmaps", href: "/#roadmaps" },
  { id: "journey", label: "Journey", href: "/#journey" },
  { id: "about", label: "About", href: "/#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="mx-auto max-w-7xl rounded-2xl border border-white/[0.09] bg-slate-950/70 shadow-2xl shadow-black/10 backdrop-blur-xl"
      >
        <div className="flex h-[68px] items-center justify-between px-4 sm:px-6">
          <Link
            className="group flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            href="/"
            aria-label="SkillBridge AI home"
            onClick={closeMenu}
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand via-violet-500 to-accent text-white shadow-lg shadow-brand/20 transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <Icon name="sparkles" size={18} />
            </span>
            <span className="text-[17px] font-semibold tracking-[-0.025em] text-white">
              SkillBridge <span className="text-brand">AI</span>
            </span>
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={`${item.id}-desktop`}
                className="relative rounded-lg px-3 py-2 text-[13px] font-medium text-muted transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/[0.05] transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-brand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              href="/#get-started"
            >
              Start Learning
              <Icon
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                name="arrow-up-right"
                size={16}
              />
            </Link>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            <Icon name={isOpen ? "x" : "menu"} size={19} />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-navigation"
          aria-hidden={!isOpen}
        >
          <div className="border-t border-white/[0.08] px-4 pb-4 pt-3">
            <div className="grid gap-1">
              {navigation.map((item) => (
                <Link
                  key={`${item.id}-mobile`}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:from-violet-500 hover:to-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              href="/careers"
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
            >
              Start Learning
              <Icon name="arrow-up-right" size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
