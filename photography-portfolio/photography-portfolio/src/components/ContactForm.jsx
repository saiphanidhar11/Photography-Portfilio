import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  'Portrait Session',
  'Wedding Photography',
  'Event Coverage',
  'Landscape Prints',
  'Commercial Shoot',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const titleRef = useScrollReveal();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">

        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-5xl lg:text-7xl text-cream font-light">
            Book a Session
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl text-cream mb-6">
              Let's Create Something<br />
              <span className="text-gold italic">Extraordinary</span>
            </h3>
            <p className="font-body text-cream/50 leading-relaxed mb-10">
              Whether it's your wedding day, a portrait session, or a landscape project —
              I bring cinematic vision and technical excellence to every frame. Reach out
              and let's discuss your vision.
            </p>

            <div className="space-y-5">
              {[
                { icon: '📧', label: 'Email', value: 'arjun@lensandlight.in' },
                { icon: '📱', label: 'Phone', value: '+91 98765 43210' },
                { icon: '📍', label: 'Location', value: 'Mumbai, India · Worldwide' },
                { icon: '⏰', label: 'Response', value: 'Within 24 hours' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="font-body text-gold/60 text-xs tracking-widest uppercase">{item.label}</p>
                    <p className="font-body text-cream/70">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-5 mt-10">
              {['Instagram', 'Facebook', 'Pinterest', 'Behance'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-body text-xs tracking-widest uppercase text-cream/30 hover:text-gold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card-bg border border-card-border p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-80 text-center gap-6"
                  >
                    {/* Animated checkmark */}
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="36" fill="none" stroke="#c9a84c" strokeWidth="2" />
                      <path
                        d="M24 40 L35 51 L56 29"
                        fill="none"
                        stroke="#c9a84c"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="50"
                        strokeDashoffset="50"
                        style={{ animation: 'drawLine 0.6s ease forwards 0.3s' }}
                      />
                    </svg>
                    <div>
                      <h4 className="font-display text-3xl text-cream mb-2">Message Sent!</h4>
                      <p className="font-body text-cream/50">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="btn-gold text-xs"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div className="input-group">
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder=" "
                          required
                        />
                        <label>Your Name</label>
                      </div>
                      <div className="input-group">
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder=" "
                          required
                        />
                        <label>Email Address</label>
                      </div>
                    </div>

                    <div className="input-group">
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <label>Service</label>
                    </div>

                    <div className="input-group">
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder=" "
                        rows={4}
                        required
                        style={{ resize: 'none' }}
                      />
                      <label>Tell me about your project...</label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold btn-gold-filled w-full text-sm tracking-widest font-body flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-dark-bg/40 border-t-dark-bg rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
