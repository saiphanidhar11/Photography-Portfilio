import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'Photography Portfolio',
      description: 'Comprehensive showcase of portrait and landscape photography work',
      category: 'Portfolio',
    },
    {
      id: 2,
      title: 'Commercial Campaigns',
      description: 'Professional campaigns for brands and businesses',
      category: 'Commercial',
    },
    {
      id: 3,
      title: 'Editorial Work',
      description: 'Featured in leading photography magazines and publications',
      category: 'Editorial',
    },
    {
      id: 4,
      title: 'Wedding Collections',
      description: 'Timeless wedding photography and event coverage',
      category: 'Weddings',
    },
  ];

  return (
    <section id="projects" className="py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-5xl lg:text-7xl text-cream font-light">
            My Projects
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Main Featured Project */}
        <motion.div
          ref={contentRef}
          className="reveal mb-20 grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
            className="relative rounded-lg overflow-hidden group"
          >
            {/* Rotating frame effect */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-lg"
              style={{
                background: 'conic-gradient(from 0deg, rgba(201,168,76,0.5), rgba(201,168,76,0), rgba(201,168,76,0.5))',
              }}
            />

            {/* Main image container */}
            <motion.div
              animate={{ filter: ['brightness(1) saturate(1)', 'brightness(1.1) saturate(1.2)', 'brightness(1) saturate(1)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src="/Thumnail.png"
                alt="Featured Project"
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{
                  boxShadow: '0 0 60px rgba(201,168,76,0.4), inset 0 0 30px rgba(201,168,76,0.15)',
                }}
              />

              {/* Light sweep effect */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  width: '100%',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Border glow with animation */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  border: '2px solid rgba(201,168,76,0.5)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(201,168,76,0.2), inset 0 0 20px rgba(201,168,76,0.1)',
                    '0 0 50px rgba(201,168,76,0.5), inset 0 0 30px rgba(201,168,76,0.2)',
                    '0 0 20px rgba(201,168,76,0.2), inset 0 0 20px rgba(201,168,76,0.1)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
              Featured Project
            </p>
            <h3 className="font-display text-4xl lg:text-5xl text-cream mb-6 leading-tight">
              Sankranthi Festival in Konaseema
            </h3>
            <p className="font-body text-cream/60 text-lg leading-relaxed mb-6">
           Sankranthi in Konaseema is a joyful harvest festival celebrating tradition, culture, and community. Villages come alive with colorful rangoli (muggu), decorated homes, Gangireddu processions, and festive gatherings. Surrounded by lush paddy fields and coconut groves, the celebration reflects the rich heritage and vibrant spirit of Andhra Pradesh.
            </p>
            <ul className="space-y-3 mb-8">
              {[

              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-cream/70"
                >
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Second Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
              Recent Work
            </p>
            <h3 className="font-display text-4xl lg:text-5xl text-cream mb-6 leading-tight">
              Culture of Andhra Pradesh
            </h3>
            <p className="font-body text-cream/60 text-lg leading-relaxed mb-6">
             The culture of Andhra Pradesh is rich in tradition, festivals, and artistic heritage. From classical dance forms like Kuchipudi to vibrant festivals such as Sankranthi, Ugadi, and Dasara, the state celebrates its deep-rooted traditions with great enthusiasm. Village life, temple rituals, colorful rangoli (muggu), and traditional music reflect the strong cultural identity of the region. The warmth of the people, diverse cuisine, and beautiful landscapes together showcase the true spirit of Andhra culture.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                


              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-cream/70"
                >
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.08 }}
            className="relative rounded-lg overflow-hidden group"
          >
            {/* Rotating frame effect */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-lg"
              style={{
                background: 'conic-gradient(from 0deg, rgba(201,168,76,0.5), rgba(201,168,76,0), rgba(201,168,76,0.5))',
              }}
            />

            {/* Main image container */}
            <motion.div
              animate={{ filter: ['brightness(1) saturate(1)', 'brightness(1.1) saturate(1.2)', 'brightness(1) saturate(1)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative"
            >
              <img
                src="/Thumbnail2.png"
                alt="Recent Work"
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{
                  boxShadow: '0 0 60px rgba(201,168,76,0.4), inset 0 0 30px rgba(201,168,76,0.15)',
                }}
              />

              {/* Light sweep effect */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  width: '100%',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Border glow with animation */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  border: '2px solid rgba(201,168,76,0.5)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(201,168,76,0.2), inset 0 0 20px rgba(201,168,76,0.1)',
                    '0 0 50px rgba(201,168,76,0.5), inset 0 0 30px rgba(201,168,76,0.2)',
                    '0 0 20px rgba(201,168,76,0.2), inset 0 0 20px rgba(201,168,76,0.1)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center pt-16 border-t border-gold/10"
        >
          <p className="font-body text-cream/60 text-lg mb-6">
            Interested in a project collaboration?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-dark-bg font-body text-sm tracking-widest uppercase transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
