# 📸 Lens & Light — Photography Portfolio

A stunning React + Tailwind CSS photography portfolio with:
- 🎥 **Real 3D Camera** on the homepage (Three.js + React Three Fiber) — auto-rotates 360°
- 🖼️ **Masonry Gallery** with category filters (Portrait / Landscape / Street / Wedding)
- 🃏 **3D Tilt Effect** on gallery cards (mouse-tracking perspective)
- 🔄 **Before & After Slider** — drag to reveal color grading transformations
- 🪄 **3D Flip Cards** for featured work — reveals EXIF camera details
- 👤 **About section** with animated stat counters
- 📬 **Contact Form** with floating labels and shimmer submit button
- 🌑 **Dark & Moody theme** — black background with gold accents
- ✨ Grain texture overlay, scroll reveal animations, gold shimmer text

---

## 🚀 Quick Start

### 1. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Start development server
\`\`\`bash
npm run dev
\`\`\`

### 3. Open in browser
\`\`\`
http://localhost:5173
\`\`\`

---

## 🏗️ Build for Production
\`\`\`bash
npm run build
npm run preview
\`\`\`

---

## 📁 Project Structure

\`\`\`
photography-portfolio/
├── public/
│   └── camera-icon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav with scroll glass effect + mobile menu
│   │   ├── Hero.jsx            # Full-screen hero with 3D camera
│   │   ├── Camera3D.jsx        # Three.js DSLR camera (360° auto-rotation)
│   │   ├── Gallery.jsx         # Masonry grid with category filters
│   │   ├── GalleryCard.jsx     # 3D tilt card with hover gold glow
│   │   ├── BeforeAfter.jsx     # Drag slider for RAW vs Edited photos
│   │   ├── Photo3DCard.jsx     # Flip cards with EXIF details
│   │   ├── About.jsx           # Bio + animated stat counters
│   │   ├── ContactForm.jsx     # Floating label form with success state
│   │   └── Footer.jsx          # Social links + copyright
│   ├── data/
│   │   └── photos.js           # All photo metadata
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver for animations
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Global styles, grain, scrollbar, utilities
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
\`\`\`

---

## 🎨 Customization

### Change photographer name/info
Edit `src/components/About.jsx` and `src/components/ContactForm.jsx`

### Add real photos
Replace `https://picsum.photos/...` URLs in `src/data/photos.js` with your own image paths

### Change color scheme
Edit CSS variables in `src/index.css` and `tailwind.config.js`:
- `--gold: #c9a84c` → your accent color
- `--dark-bg: #0a0a0a` → background color

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `three` | 3D rendering engine |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Three.js helpers (Float, Environment) |
| `framer-motion` | Page animations and transitions |
| `tailwindcss` | Utility-first CSS framework |

---

## 🌐 Node.js Requirement
Node.js **18+** recommended.
