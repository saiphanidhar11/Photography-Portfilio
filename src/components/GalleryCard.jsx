import React, { useRef, useState } from 'react';

export default function GalleryCard({ photo }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [hovered, setHovered] = useState(false);
  const isVideo = photo.type === 'video';

  const handleMouseMove = (e) => {
    if (isVideo) return; // Disable 3D effect for videos
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`
    );
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden cursor-pointer rounded-sm group"
      style={{
        transform: transform,
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Player */}
      {isVideo ? (
        <video
          src={photo.src}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            minHeight: '200px',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
          autoPlay
          loop
          muted
        />
      ) : (
        /* Image */
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            minHeight: '200px',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
          loading="lazy"
        />
      )}

      {/* Play button overlay for videos */}
      {isVideo && (
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            opacity: hovered ? 0 : 0,
            background: 'transparent',
          }}
        >
          <div className="w-16 h-16 bg-gold/80 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-dark-bg ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Gold border glow on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-300 rounded-sm"
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.7), 0 0 30px rgba(201,168,76,0.25)',
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-400"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
          opacity: hovered ? 1 : 0,
        }}
      >
        <span className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-1">
          {photo.category}
        </span>
        <h3 className="font-display text-cream text-xl">{photo.title}</h3>
        <p className="font-body text-cream/50 text-xs mt-1">{photo.location}</p>
      </div>
    </div>
  );
}
