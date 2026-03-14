import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

const skills = [
  'Portrait Photography', 'Wedding Photography', 'Landscape', 'Street Photography',
  'Color Grading', 'Adobe Lightroom', 'Adobe Photoshop', 'Capture One',
  'Drone Photography', 'Studio Lighting',
];

const stats = [
  { value: 500, label: 'Photos Taken' },
  { value: 150, label: 'Happy Clients' },
  { value: 8, label: 'Years Experience' },
  { value: 12, label: 'Awards Won' },
];

function StatCounter({ stat }) {
  const ref = useCountUp(stat.value);
  return (
    <div className="text-center">
      <div ref={ref} className="font-display text-4xl lg:text-5xl text-gold">0+</div>
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
            className="relative flex justify-center"
          >
            <div className="relative" style={{ width: 340, height: 420 }}>
              {/* Gold ring */}
              <div
                className="absolute -inset-3 rounded-sm opacity-60"
                style={{
                  border: '1px solid rgba(201,168,76,0.4)',
                  transform: 'rotate(-3deg)',
                }}
              />
              <div
                className="absolute -inset-6 rounded-sm opacity-30"
                style={{
                  border: '1px solid rgba(201,168,76,0.2)',
                  transform: 'rotate(2deg)',
                }}
              />

              <img
                src="https://picsum.photos/seed/portrait_profile/340/420"
                alt="Photographer"
                className="w-full h-full object-cover relative z-10"
                style={{ filter: 'contrast(1.05) saturate(0.85)' }}
              />

              {/* Gold badge */}
              <div
                className="absolute -bottom-5 -right-5 z-20 bg-gold text-dark-bg p-5 font-body"
                style={{ minWidth: 100 }}
              >
                <div className="font-display text-3xl font-bold leading-none">8+</div>
                <div className="text-xs tracking-widest uppercase leading-tight mt-1">Years<br />Active</div>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <div ref={textRef} className="reveal">
            <h3 className="font-display text-4xl text-cream font-light mb-2">Arjun Sharma</h3>
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-6">
              Visual Storyteller · Mumbai, India
            </p>
            <p className="font-body text-cream/60 text-lg leading-relaxed mb-4 font-display italic">
              "I don't just take photographs — I craft visual narratives that stop time
              and speak without words."
            </p>
            <p className="font-body text-cream/50 leading-relaxed mb-4">
              With over 8 years behind the lens, I've traveled across 30+ countries,
              documenting the human condition, nature's grandeur, and love's most private moments.
              My work has been featured in National Geographic India, Vogue, and exhibited
              in galleries across Mumbai and Delhi.
            </p>
            <p className="font-body text-cream/40 leading-relaxed mb-8">
              Every photograph I take is a meditation on light, shadow, and the fleeting beauty
              of the present moment. I specialize in portraits, weddings, and landscape work —
              always pursuing that one frame that says everything.
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gold/10 pt-16"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
