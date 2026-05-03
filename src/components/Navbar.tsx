"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      className="w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Announcement Bar */}
      <div className="bg-olive text-linen text-center text-xs tracking-widest uppercase py-2 px-4 font-body">
        Free shipping on orders over $75 · Summer collection now live
      </div>

      {/* Main Nav */}
      <nav className="bg-linen border-b border-wheat px-6 md:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl text-olive tracking-tight leading-none"
        >
          Simply
          <br />
          <span className="text-amber">Sunflowers</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 font-body text-sm tracking-widest uppercase text-olive">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                className={`hover:text-amber transition-colors duration-200 ${pathname === link.href ? "text-amber" : ""}`}
              >
                {link.label}
              </Link>
              {pathname === link.href && (
                <motion.div
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-amber"
                  layoutId="underline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-olive">
          <button
            aria-label="Search"
            className="hover:text-amber transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </button>

          <button
            aria-label="Cart"
            className="hover:text-amber transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
              />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>

          <button
            aria-label="Menu"
            className="md:hidden hover:text-amber transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-linen border-b border-wheat px-6 py-4 flex flex-col gap-4 font-body text-sm tracking-widest uppercase text-olive"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-amber transition-colors ${pathname === link.href ? "text-amber" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
