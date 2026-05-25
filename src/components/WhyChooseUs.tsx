"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, LineChart } from "lucide-react";

const reasons = [
  {
    title: "Experienced Teaching",
    desc: "Passionate educators with decades of combined experience shaping young minds.",
    icon: LineChart,
  },
  {
    title: "Safe Environment",
    desc: "A secure, CCTV-monitored campus ensuring the utmost safety for your child.",
    icon: ShieldCheck,
  },
  {
    title: "Student Development",
    desc: "Focus on moral values, leadership, and emotional intelligence.",
    icon: Heart,
  },
  {
    title: "Modern Facilities",
    desc: "Well-equipped labs, digital classrooms, and extensive sports facilities.",
    icon: Sparkles,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--color-brand-red)] font-bold tracking-wider text-sm uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
              Why Choose Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              A Legacy of <span className="text-[var(--color-brand-gold)]">Trust</span> & Excellence
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              For over 40 years, parents in Nizamabad have trusted Nalanda High School to provide a strong educational foundation. We don&apos;t just teach; we inspire.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-brand-teal)]/10 flex items-center justify-center">
                      <reason.icon className="w-5 h-5 text-[var(--color-brand-teal)]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{reason.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[var(--color-brand-teal)] rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-5xl font-heading font-bold text-[var(--color-brand-gold)] mb-2">1980</div>
                  <div className="font-medium text-teal-50 uppercase tracking-wide text-sm">Established</div>
                </div>
                <div>
                  <div className="text-5xl font-heading font-bold text-[var(--color-brand-gold)] mb-2">10k+</div>
                  <div className="font-medium text-teal-50 uppercase tracking-wide text-sm">Alumni</div>
                </div>
                <div>
                  <div className="text-5xl font-heading font-bold text-[var(--color-brand-gold)] mb-2">100%</div>
                  <div className="font-medium text-teal-50 uppercase tracking-wide text-sm">Pass Results</div>
                </div>
                <div>
                  <div className="text-5xl font-heading font-bold text-[var(--color-brand-gold)] mb-2">50+</div>
                  <div className="font-medium text-teal-50 uppercase tracking-wide text-sm">Expert Staff</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
