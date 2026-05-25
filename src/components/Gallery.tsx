"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/gallery/2A3A2478.JPG.jpeg", alt: "School Event" },
  { id: 2, src: "/gallery/2A3A2786.JPG.jpeg", alt: "Science Lab" },
  { id: 3, src: "/gallery/2A3A2852.JPG.jpeg", alt: "Sports Day" },
  { id: 4, src: "/gallery/2A3A2853.JPG.jpeg", alt: "Classroom" },
  { id: 5, src: "/gallery/2A3A2860.JPG.jpeg", alt: "Library" },
  { id: 6, src: "/gallery/2A3A2866.JPG.jpeg", alt: "Annual Day" },
  { id: 7, src: "/gallery/2A3A2887.JPG.jpeg", alt: "Campus" },
  { id: 8, src: "/gallery/2A3A2890.JPG.jpeg", alt: "Students" },
  { id: 9, src: "/gallery/2A3A2957.JPG.jpeg", alt: "Activities" },
  { id: 10, src: "/gallery/2A3A3020.JPG.jpeg", alt: "Event" },
  { id: 11, src: "/gallery/2A3A3032.JPG.jpeg", alt: "Campus View" },
  { id: 12, src: "/gallery/2A3A5418.JPG.jpeg", alt: "Students" },
  { id: 13, src: "/gallery/2A3A5430.JPG.jpeg", alt: "Classroom" },
  { id: 14, src: "/gallery/2A3A5440.JPG.jpeg", alt: "Lab" },
  { id: 15, src: "/gallery/DSC01467.JPG.jpeg", alt: "Main Building" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--color-brand-gold)] font-bold tracking-wider text-sm uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-1 bg-[var(--color-brand-gold)] rounded-full"></span>
              Life at Nalanda
              <span className="w-8 h-1 bg-[var(--color-brand-gold)] rounded-full"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our <span className="text-[var(--color-brand-teal)]">Gallery</span>
            </h3>
            <p className="text-lg text-slate-400">
              Glimpses of academic, cultural, and sports activities that make our campus vibrant.
            </p>
          </motion.div>
        </div>

        {/* Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2 h-[300px] md:h-[400px]" : "h-[300px]"
              }`}
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Gallery Preview"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
