import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { featuredPhotos } from '../data/photos';

function FlipCard({ photo, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div
        className="flip-card"
        style={{ height: '420px', cursor: 'pointer' }}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
          {/* Front */}
          <div className="flip-card-front">
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                animation: `float ${5 + index * 1.2}s ease-in-out infinite`,
                animationDelay: `${index * 0.4}s`,
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover"
              />

              {/* Rotating gold border */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ border: '1px solid rgba(201,168,76,0.3)' }}
              />

              {/* Bottom overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}
              >
                <p className="font-body text-gold text-xs tracking-[0.3em] uppercase">Click to explore</p>
                <h3 className="font-display text-cream text-2xl mt-1">{photo.title}</h3>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 left-4 w-10 h-6 border-t border-l border-gold/50" />
              <div className="absolute top-4 right-4 w-10 h-6 border-t border-r border-gold/50" />
              <div className="absolute bottom-4 left-4 w-10 h-6 border-b border-l border-gold/50" />
              <div className="absolute bottom-4 right-4 w-10 h-6 border-b border-r border-gold/50" />
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back bg-card-bg border border-gold/20 p-8 flex flex-col justify-center">
            <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">EXIF Details</p>
            <h3 className="font-display text-cream text-3xl mb-6">{photo.title}</h3>

            <div className="space-y-3 mb-6">
              {[
                { icon: '📷', label: 'Camera', value: photo.camera },
                { icon: '🔭', label: 'Lens', value: photo.lens },
                { icon: '📍', label: 'Location', value: photo.location },
                { icon: '📅', label: 'Year', value: photo.year },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5">{item.icon}</span>
                  <div>
                    <span className="font-body text-gold/60 text-xs tracking-widest uppercase">{item.label}</span>
                    <p className="font-body text-cream/80 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gold/10 pt-4">
              <p className="font-display text-cream/60 italic text-base leading-relaxed">
                "{photo.mood}"
              </p>
            </div>

            <p className="font-body text-cream/30 text-xs mt-4">Click to flip back</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Photo3DCard() {
  const titleRef = useScrollReveal();

  return (
    <section id="featured" className="py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">

        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-3">Showcase</p>
          <h2 className="font-display text-5xl lg:text-7xl text-cream font-light">
            Featured Work
          </h2>
          <p className="font-body text-cream/40 mt-4">Click each card to reveal the story behind the shot.</p>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredPhotos.map((photo, i) => (
            <FlipCard key={photo.id} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
