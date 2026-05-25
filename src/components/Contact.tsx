"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
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
              Get In Touch
              <span className="w-8 h-1 bg-[var(--color-brand-red)] rounded-full"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Contact <span className="text-[var(--color-brand-teal)]">Us</span>
            </h3>
            <p className="text-lg text-slate-600">
              We&apos;re here to answer your questions and welcome you to our campus.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
          >
            <div className="w-16 h-16 bg-red-50 text-[var(--color-brand-red)] rounded-full flex items-center justify-center mb-6">
              <Phone className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Call Us</h4>
            <p className="text-slate-600 font-medium">6281193396</p>
            <p className="text-slate-600 font-medium">9963253400</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
          >
            <div className="w-16 h-16 bg-teal-50 text-[var(--color-brand-teal)] rounded-full flex items-center justify-center mb-6">
              <Mail className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Email Us</h4>
            <a href="mailto:nalandahs1980@gmail.com" className="text-slate-600 font-medium hover:text-[var(--color-brand-teal)] transition-colors">
              nalandahs1980@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
          >
            <div className="w-16 h-16 bg-amber-50 text-[var(--color-brand-gold)] rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h4>
            <p className="text-slate-600 font-medium">
              Nyalkal Road, Nizamabad,<br />
              Telangana
            </p>
          </motion.div>
        </div>

        {/* Map & WhatsApp Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0821034446543!2d78.0924151749666!3d18.660309982460614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc18b4566c1f1c1%3A0x13ab7df6fc3b3b49!2sNalanda%20High%20School!5e0!3m2!1sen!2sin!4v1716620584795!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Chat on WhatsApp</h4>
            <p className="text-slate-600 mb-8 max-w-md">
              Have a quick question about admissions, fees, or facilities? Message us directly on WhatsApp for a fast response.
            </p>
            <Link
              href="https://wa.me/916281193396"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat With Us
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
