"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Nalanda High School Campus"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[var(--color-brand-gold)]/90 backdrop-blur-sm text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6">
              ADMISSIONS OPEN
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Shaping Bright Futures <span className="text-[var(--color-brand-gold)]">Since 1980</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl font-medium drop-shadow-md">
              Quality Education, Discipline, Innovation & Excellence. Preparing students to lead and succeed in a dynamic world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#admissions"
                className="group flex items-center justify-center gap-2 bg-[var(--color-brand-red)] hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Apply for Admission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#about"
                className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                <BookOpen className="w-5 h-5" />
                Explore Campus
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
