"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send, User, MapPin, BookOpen, Calendar, Phone } from "lucide-react";

export default function AdmissionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="admissions" className="py-24 bg-slate-900 relative">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[url('/hero.png')] opacity-5 bg-cover bg-center" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-[var(--color-brand-gold)] font-bold tracking-wider text-sm uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-[var(--color-brand-gold)] rounded-full"></span>
            Join Our Legacy
            <span className="w-8 h-1 bg-[var(--color-brand-gold)] rounded-full"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Application for <span className="text-[var(--color-brand-teal)]">Admission</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Fill out the form below to apply for the upcoming academic session. Our admissions team will contact you shortly.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
        >
          <div className="h-3 w-full bg-gradient-to-r from-[var(--color-brand-teal)] via-[var(--color-brand-gold)] to-[var(--color-brand-red)]" />
          
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                  suppressHydrationWarning
                >
                  
                  {/* Section 1: Student Details */}
                  <div className="space-y-6">
                    <h4 className="flex items-center gap-2 text-xl font-bold text-[var(--color-brand-teal)] border-b pb-2">
                      <User className="w-6 h-6" />
                      Student Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Surname</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Enter Surname" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Student Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Enter Given Name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Aadhaar Number</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="12-digit Aadhaar" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Date of Birth</label>
                        <div className="relative">
                          <input required type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nationality / State</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" defaultValue="Indian / Telangana" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Caste / Group</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="OC / BC / SC / ST" />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Parent Details */}
                  <div className="space-y-6">
                    <h4 className="flex items-center gap-2 text-xl font-bold text-[var(--color-brand-teal)] border-b pb-2">
                      <Phone className="w-6 h-6" />
                      Parent / Guardian Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Father's Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Father's Full Name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Father's Occupation</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Occupation" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Mother's Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Mother's Full Name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Mother's Occupation</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Occupation" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Number</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="+91 Mobile Number" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Address</label>
                        <textarea required rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="H.No, Street, Area, City..." />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Academic Details */}
                  <div className="space-y-6">
                    <h4 className="flex items-center gap-2 text-xl font-bold text-[var(--color-brand-teal)] border-b pb-2">
                      <BookOpen className="w-6 h-6" />
                      Academic Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Class last studied & School Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="e.g. Class 5, XYZ School" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Class applying for</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white">
                          <option value="">Select Class</option>
                          <option value="nursery">Nursery / LKG / UKG</option>
                          <option value="1-5">Primary (I - V)</option>
                          <option value="6-10">High School (VI - X)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Medium of Instruction</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[var(--color-brand-teal)] focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white">
                          <option value="english">English (Default)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--color-brand-red)] hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Application Form
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                      By submitting, I declare that the details provided are correct and I agree to the school's terms.
                    </p>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </motion.div>
                  <h4 className="text-3xl font-heading font-bold text-slate-900 mb-4">Application Received!</h4>
                  <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                    Thank you for applying to Nalanda High School. We have received your application successfully. Our admissions office will contact you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-8 py-3 rounded-full transition-colors"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
