import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

const skills = [
  'Portrait Photography', 'Nature Photography', 'Landscape Artist', 
  'Street Photography', 'Color Grading', 'Adobe Lightroom', 'Adobe Photoshop',
  'CapCut', 'Drone Photography', 'Editing', 'Cinematic Videos', 'Travel Photography', 
  'Wildlife Photography', 'Architecture Photography', 'Macro Photography', 
  'Fashion Photography', 'Product Photography', 'Event Photography', 
  'Night Photography', 'Astrophotography', 'Fine Art Photography', 
  'Documentary Photography', 'Photo Retouching', 'Photo Manipulation', 
  'Image Enhancement', 'Color Correction', 'Lightroom Presets', 
  'Visual Storytelling', 'Short Film Creation', 'Video Editing', 
  'Slow Motion Cinematography', 'Time-Lapse Photography', 'Hyperlapse Videos', 
  'Drone Cinematography', 'Creative Direction', 'Studio Photography',
   'Natural Light Photography', 'Outdoor Photography', 
   'Minimalist Photography', 'Frame Composition', 'Rule of Thirds', 
   'Depth of Field', 'Long Exposure', 'Golden Hour Photography', 'Blue Hour Photography'
];

const stats = [
  { value: 500, label: 'Photos Taken' },
  { value: 20, label: 'Happy Clients' },
  { value: 4, label: 'Years Experience' },
  { value: 1000000, label: 'Instagram Views' },
];

function StatCounter({ stat }) {
  const ref = useCountUp(stat.value);
  const displayValue = stat.value >= 1000000 ? '1M+' : '0+';
  return (
    <div className="text-center">
      <div ref={ref} className="font-display text-4xl lg:text-5xl text-gold">{displayValue}</div>
      <div className="font-body text-xs text-cream/40 tracking-[0.3em] uppercase mt-2">{stat.label}</div>
    </div>
  );
}

export default function About() {
  const titleRef = useScrollReveal();
  const textRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-28" style={{ background: '#0d0d0d' }}>
      <div className="max-w-7xl mx-auto px-6">

        <div ref={titleRef} className="reveal text-center mb-20">
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-3">The Photographer</p>
          <h2 className="font-display text-5xl lg:text-7xl text-cream font-light">About Me</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ y: -20, scale: 1.02 }}
            className="relative flex justify-center"
          >
            <motion.div 
              className="relative" 
              style={{ width: 340, height: 420 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Gold ring */}
              <motion.div
                className="absolute -inset-3 rounded-sm opacity-60"
                style={{
                  border: '1px solid rgba(201,168,76,0.4)',
                  transform: 'rotate(-3deg)',
                }}
                animate={{ boxShadow: ["0 0 20px rgba(201,168,76,0.2)", "0 0 40px rgba(201,168,76,0.4)", "0 0 20px rgba(201,168,76,0.2)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div
                className="absolute -inset-6 rounded-sm opacity-30"
                style={{
                  border: '1px solid rgba(201,168,76,0.2)',
                  transform: 'rotate(2deg)',
                }}
              />

              <motion.img
                src="/Photo2.jpeg"
                alt="Photographer"
                className="w-full h-full object-cover relative z-10"
                style={{ filter: 'contrast(1.05) saturate(0.85)' }}
                whileHover={{ filter: 'contrast(1.15) saturate(1)' }}
                transition={{ duration: 0.3 }}
              />

              {/* Gold badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 z-20 bg-gold text-dark-bg p-5 font-body"
                style={{ minWidth: 100 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <div className="font-display text-3xl font-bold leading-none">4+</div>
                <div className="text-xs tracking-widest uppercase leading-tight mt-1">Years<br />Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bio text */}
          <div ref={textRef} className="reveal">
            <h3 className="font-display text-4xl text-cream font-light mb-2">Sai Phanidhar P</h3>
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-6">
              Visual Storyteller · Bengaluru, India
            </p>
            <p className="font-body text-cream/60 text-lg leading-relaxed mb-4 font-display italic">
              "I don’t just capture photographs — I capture emotions, moments, and stories that live far beyond the frame."
            </p>
            <p className="font-body text-cream/50 leading-relaxed mb-4">
              My work focuses on capturing authentic stories — from powerful portraits and cinematic landscapes 
              to spontaneous street moments. I believe that the most compelling photographs are the ones 
              that feel natural, timeless, and emotionally alive.
            </p>
            <p className="font-body text-cream/40 leading-relaxed mb-8">
              Photography for me is more than a craft; it is a way of observing the world with intention. 
              Every frame I create is driven by light, composition, and the subtle emotions that exist in real moments.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-body text-xs tracking-widest uppercase text-gold border border-gold/30 px-3 py-1.5 hover:bg-gold/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-gold/10 pt-16"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
