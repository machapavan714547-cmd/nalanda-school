"use client";

import { motion } from "framer-motion";
import { Bus, Monitor, FlaskConical, Library, ShieldCheck, Music } from "lucide-react";

const facilities = [
  { name: "Bus Transport", icon: Bus, desc: "Safe and wide-reaching school transport across Nizamabad." },
  { name: "Computer Lab", icon: Monitor, desc: "Modern PCs with high-speed internet and coding curriculum." },
  { name: "Science Lab", icon: FlaskConical, desc: "Fully equipped Physics, Chemistry, and Biology laboratories." },
  { name: "Library", icon: Library, desc: "Vast collection of reference books, encyclopedias, and literature." },
  { name: "NCC", icon: ShieldCheck, desc: "National Cadet Corps training for discipline and leadership." },
  { name: "Dance & Music", icon: Music, desc: "Dedicated spaces for classical and contemporary arts." },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--color-brand-red)] font-bold tracking-wider text-sm uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
              Campus Amenities
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              World-Class <span className="text-[var(--color-brand-teal)]">Facilities</span>
            </h3>
            <p className="text-lg text-slate-600">
              We provide state-of-the-art infrastructure to ensure our students have everything they need to excel academically and in extracurriculars.
            </p>
          </motion.div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[var(--color-brand-teal)]/30 hover:bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 text-[var(--color-brand-teal)] group-hover:bg-[var(--color-brand-teal)] group-hover:text-white transition-colors duration-300">
                <facility.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{facility.name}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {facility.desc}
              </p>
            </motion.div>
          ))}
          
          {/* Highlight Card to fill the 8th spot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 7 * 0.05 }}
            className="bg-gradient-to-br from-[var(--color-brand-red)] to-red-900 rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center text-center text-white min-h-[200px]"
          >
            <h4 className="text-2xl font-bold font-heading mb-2">And Much More!</h4>
            <p className="text-red-100 text-sm">Schedule a campus tour to experience it all.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
