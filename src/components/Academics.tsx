"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users } from "lucide-react";

const features = [
  {
    title: "Experienced Faculty",
    description: "Highly qualified and dedicated teachers committed to student success.",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Academic Excellence",
    description: "Consistently achieving top results in board examinations year after year.",
    icon: GraduationCap,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Student Growth",
    description: "Focus on overall personality development, soft skills, and confidence.",
    icon: BookOpen,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Academics() {
  return (
    <section id="academics" className="py-24 bg-slate-50 relative">
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
              Curriculum & Programs
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Academic <span className="text-[var(--color-brand-teal)]">Excellence</span>
            </h3>
            <p className="text-lg text-slate-600">
              We offer a rigorous and comprehensive curriculum designed to challenge students and prepare them for higher education and beyond.
            </p>
          </motion.div>
        </div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--color-brand-teal)] rounded-3xl p-8 md:p-12 shadow-2xl mb-20 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-[var(--color-brand-gold)]/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-3xl font-heading font-bold mb-2 text-[var(--color-brand-gold)]">Nursery to Class X</h4>
            <p className="text-xl font-medium text-white/90">English Medium • State Curriculum</p>
          </div>
          <div className="relative z-10 flex gap-4 md:gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-heading text-white mb-1">100%</div>
              <div className="text-sm text-teal-100 font-medium uppercase tracking-wider">Pass Rate</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <div className="text-4xl font-bold font-heading text-white mb-1">40+</div>
              <div className="text-sm text-teal-100 font-medium uppercase tracking-wider">Years Exp.</div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
