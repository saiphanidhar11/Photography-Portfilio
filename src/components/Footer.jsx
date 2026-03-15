import React from 'react';

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.16 1.22-5.16s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.52-.25 1.05.52 1.9 1.54 1.9 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.21.84-.24.95-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.06-5.45 5.94-5.45 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.66 5.59-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.84.26 1.74.4 2.67.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'Behance',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.938.189.386.286.851.286 1.393 0 .598-.134 1.098-.397 1.498-.267.4-.647.732-1.141.993.689.2 1.201.548 1.553 1.038.347.492.524 1.083.524 1.773 0 .6-.116 1.122-.349 1.565-.232.443-.551.804-.957 1.086-.405.28-.874.49-1.405.621-.53.132-1.081.198-1.654.198H1V5.731h6.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.468-.587.468-1.073 0-.27-.051-.494-.149-.675-.1-.18-.236-.323-.407-.424-.172-.103-.365-.175-.58-.217-.216-.042-.441-.063-.672-.063H3.421v2.797h4.031zm.173 5.239c.267 0 .52-.028.758-.086.24-.057.449-.147.629-.271.18-.124.323-.288.429-.492.106-.205.158-.455.158-.752 0-.596-.166-1.025-.499-1.285-.332-.26-.775-.39-1.327-.39H3.421v3.276h4.204zm9.261-8.457h5.307v1.173H16.886V7.485zm.619 8.022c.372.363.906.544 1.599.544.499 0 .929-.125 1.293-.376.363-.252.587-.52.672-.804h2.322c-.372 1.154-.943 1.981-1.71 2.478-.768.497-1.698.745-2.789.745-.757 0-1.44-.122-2.05-.365-.608-.244-1.125-.588-1.552-1.033-.425-.446-.754-.976-.984-1.591-.232-.614-.347-1.289-.347-2.022 0-.71.118-1.372.354-1.984.236-.612.571-1.14 1.003-1.582.431-.442.948-.789 1.551-1.039.601-.25 1.268-.375 1.997-.375.816 0 1.535.158 2.153.471.617.314 1.129.737 1.532 1.271.401.534.689 1.146.863 1.832.173.687.231 1.411.173 2.173h-6.939c.039.754.284 1.313.659 1.657zm2.915-4.479c-.298-.328-.772-.492-1.42-.492-.414 0-.759.069-1.031.207-.273.138-.494.31-.664.518-.171.207-.289.426-.355.658-.067.232-.106.449-.12.649h4.182c-.097-.693-.295-1.212-.592-1.54z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-16"
      style={{ borderColor: 'rgba(201,168,76,0.1)', background: '#080808' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 items-center gap-8 mb-12">

          {/* Logo */}
          <div>
            <h3 className="font-display text-2xl text-gold-shimmer tracking-widest mb-2">
              LENS & LIGHT
            </h3>
            <p className="font-body text-cream/30 text-sm">
              Capturing light. Telling stories. Worldwide.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['Gallery', 'Before & After', 'Featured', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s/g, '-')}`}
                className="font-body text-xs tracking-widest uppercase text-cream/30 hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex justify-end gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                title={s.name}
                className="text-cream/30 hover:text-gold transition-colors p-2 border border-cream/10 hover:border-gold/40"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-body text-cream/20 text-xs tracking-widest">
            © {new Date().getFullYear()} Lens & Light Photography · Arjun Sharma. All rights reserved.
          </p>
          <p className="font-body text-cream/20 text-xs">
            Crafted with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
}
