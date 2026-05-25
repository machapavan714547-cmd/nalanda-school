"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[var(--color-brand-red)] overflow-hidden shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Nalanda High School Logo"
                  fill
                  className="object-cover scale-[1.03]"
                />
              </div>
            </div>
            <div className={`flex flex-col ${isScrolled ? "text-slate-900" : "text-white drop-shadow-md"}`}>
              <span className="font-heading font-bold text-lg md:text-2xl leading-tight">
                Nalanda
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
                High School
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-[var(--color-brand-gold)] ${
                  isScrolled ? "text-slate-700" : "text-white/90 drop-shadow-sm"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#admissions"
              className="bg-[var(--color-brand-red)] text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:bg-red-800 transition-all hover:scale-105 active:scale-95"
            >
              Admissions Open
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 border-t border-slate-100"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-700 font-medium w-full text-center py-2 hover:bg-slate-50 hover:text-[var(--color-brand-red)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#admissions"
            className="bg-[var(--color-brand-red)] text-white px-8 py-3 rounded-full font-medium w-4/5 text-center shadow-md mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Admissions Open
          </Link>
        </motion.div>
      )}
    </header>
  );
}
