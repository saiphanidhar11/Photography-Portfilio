import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Camera3D from './Camera3D';

const words = ['Moments.', 'Stories.', 'Emotions.', 'Eternity.'];

function WordCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      key={index}
      className="inline-block text-gold font-display italic"
      style={{
        animation: 'fadeUp 0.6s ease-out forwards',
        opacity: 0,
      }}
    >
      {words[index]}
    </span>
  );
}

export default function Hero() {
  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[5000px] h-[1500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #e8c96a 0%, transparent 70%)' }}
        />
      </div>

      {/* Floating aperture rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[200, 350, 500, 650].map((size, i) => (
          <div
            key={i}
            className="absolute border border-gold/5 rounded-full"
            style={{
              width: size,
              height: size,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
              animation: `float ${6 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-3 gap-8 items-center pt-24">
        {/* Left: Title and Description */}
        <div className="flex flex-col gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">
              Photography Portfolio
            </p>
            <h1 className="font-display text-5xl lg:text-7xl font-light text-cream leading-none">
              Capturing
              <br />
              <WordCycler />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-body text-cream/50 text-lg max-w-md leading-relaxed"
          >
            Award-winning photographer specializing in portraits and landscapes, focused on capturing emotion, light, and timeless visual stories.
          </motion.p>
        </div>

        {/* Center: 3D Camera */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full h-[500px] lg:h-[650px] relative flex justify-center"
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gold font-display text-xl animate-pulse">Loading Camera...</div>
              </div>
            }
          >
            <Camera3D />
          </Suspense>

          {/* Glow under camera */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-16 opacity-30 blur-2xl rounded-full"
            style={{ background: '#c9a84c' }}
          />
        </motion.div>

        {/* Right: Buttons and Stats */}
        <div className="flex flex-col gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col gap-4"
          >
            <button
              onClick={() => handleScroll('#gallery')}
              className="btn-gold btn-gold-filled font-body text-sm tracking-widest"
            >
              View Gallery
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-gold font-body text-sm tracking-widest"
            >
              Book a Session
            </button>
            <a
              href="https://www.instagram.com/phani.______?igsh=MW81ZG1kd3ZzYnhxYw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold font-body text-sm tracking-widest flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col gap-6 pt-6 border-t border-gold/10"
          >
            {[
              { value: '500+', label: 'Photos Taken' },
              { value: '4+', label: 'Years Active' },
              { value: '20+', label: 'Happy Clients' },
              { value: '1M+', label: 'Instagram Views' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl lg:text-3xl text-gold">{stat.value}</div>
                <div className="font-body text-xs text-cream/40 tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
      >
        <span className="font-body text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
