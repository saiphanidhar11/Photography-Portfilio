import React, { useState, useRef, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { beforeAfterPairs } from '../data/photos';

function BeforeAfterSlider({ pair }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const updateSlider = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const onMouseMove = useCallback((e) => {
    if (!dragging) return;
    updateSlider(e.clientX);
  }, [dragging, updateSlider]);

  const onMouseUp = () => setDragging(false);

  const onTouchStart = () => setDragging(true);
  const onTouchMove = useCallback((e) => {
    if (!dragging) return;
    updateSlider(e.touches[0].clientX);
  }, [dragging, updateSlider]);
  const onTouchEnd = () => setDragging(false);

  return (
    <div className="mb-8">
      <div
        ref={containerRef}
        className="before-after-container relative select-none"
        style={{
          height: '380px',
          cursor: dragging ? 'col-resize' : 'col-resize',
        }}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* After (base, full width) */}
        <img
          src={pair.after}
          alt="After edit"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* EDITED label */}
        <div className="absolute top-4 right-4 z-20 font-body text-xs tracking-[0.3em] uppercase text-gold bg-dark-bg/80 px-3 py-1.5 border border-gold/30">
          Edited
        </div>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={pair.before}
            alt="Before edit"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'saturate(0.4) contrast(0.9)' }}
            draggable={false}
          />
          {/* RAW label */}
          <div className="absolute top-4 left-4 z-20 font-body text-xs tracking-[0.3em] uppercase text-cream/80 bg-dark-bg/80 px-3 py-1.5 border border-cream/20">
            Raw
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-gold z-10"
          style={{ left: `${sliderPos}%`, transition: dragging ? 'none' : 'left 0.05s' }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
          style={{
            left: `${sliderPos}%`,
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#c9a84c',
            boxShadow: '0 0 20px rgba(201,168,76,0.5)',
            cursor: 'col-resize',
            transition: dragging ? 'none' : 'left 0.05s',
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <path d="M6 8L1 4M6 8L1 12M6 8H18M18 8L23 4M18 8L23 12" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h4 className="font-display text-cream text-xl">{pair.title}</h4>
          <p className="font-body text-cream/40 text-sm mt-1">{pair.description}</p>
        </div>
        <div className="text-right">
          <span className="font-body text-gold text-xs tracking-widest uppercase">Drag to Compare</span>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const titleRef = useScrollReveal();

  return (
    <section id="before-after" className="py-28" style={{ background: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-3">Color Grading</p>
          <h2 className="font-display text-5xl lg:text-7xl text-cream font-light">
            Before & After
          </h2>
          <p className="font-body text-cream/40 mt-4 max-w-xl mx-auto">
            Drag the slider to witness the transformation — from raw capture to cinematic masterpiece.
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="space-y-16">
          {beforeAfterPairs.map((pair) => (
            <BeforeAfterSlider key={pair.id} pair={pair} />
          ))}
        </div>
      </div>
    </section>
  );
}
