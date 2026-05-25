"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-brand-teal)]/5 -skew-x-12 translate-x-20 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.png" // Reusing hero for demo purposes, ideally a different campus photo
                alt="Students studying at Nalanda High School"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-brand-teal)]/20 mix-blend-multiply" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-[var(--color-brand-gold)]/20 p-3 rounded-full">
                  <Target className="w-8 h-8 text-[var(--color-brand-gold)]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xl">40+ Years</h4>
                  <p className="text-sm text-slate-500 font-medium">Of Academic Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[var(--color-brand-red)] font-bold tracking-wider text-sm uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
              About Our Institution
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Nalanda High School <br />
              <span className="text-[var(--color-brand-teal)]">Nizamabad</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Located on Nyalkal Road, Nizamabad, Nalanda High School has been a beacon of learning and discipline since 1980. We provide holistic education, combining academic rigor with character building to develop well-rounded future leaders.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-[var(--color-brand-teal)]/10 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-[var(--color-brand-teal)]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-slate-600">To empower students with knowledge, critical thinking, and moral values in a disciplined and student-first environment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-[var(--color-brand-gold)]/20 p-2 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-[var(--color-brand-gold)]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-slate-600">To be a premier educational institution that fosters innovation, holistic development, and a passion for lifelong learning.</p>
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Student-First Approach", "Academic Excellence", "Strict Discipline", "Holistic Development"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-red)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
