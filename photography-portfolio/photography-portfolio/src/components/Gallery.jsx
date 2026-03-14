import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { photos } from '../data/photos';
import GalleryCard from './GalleryCard';

const categories = ['All'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const titleRef = useScrollReveal();

  const filtered = activeCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-5xl lg:text-7xl text-cream font-light">
            The Gallery
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs tracking-[0.2em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-dark-bg border-gold'
                  : 'border-gold/30 text-cream/50 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid mb-4"
              >
                <GalleryCard photo={photo} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
