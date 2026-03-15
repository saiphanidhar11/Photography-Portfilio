import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import BeforeAfter from './components/BeforeAfter';
import Photo3DCard from './components/Photo3DCard';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark-bg min-h-screen p-3">

      {/* outer padding creates space between screen and border */}

      <div
        className="min-h-screen"
        style={{
          border: "3px solid",
          borderImage:
            "linear-gradient(135deg,#D4AF37,#FFD700,#F5DEB3,#FFD700,#D4AF37) 1",

          /* OUTER GLOW */
          boxShadow:
            "0 0 10px rgba(212,175,55,0.6), 0 0 25px rgba(212,175,55,0.5), 0 0 45px rgba(255,215,0,0.4)",

          /* INNER GOLD LIGHT */
          background:
            "radial-gradient(circle at center, rgba(255,215,0,0.05), transparent 60%)",

          borderRadius: "12px"
        }}
      >

        <Navbar />
        <Hero />
        <Gallery />
        <BeforeAfter />
        <Photo3DCard />
        <About />
        <ContactForm />
        <Footer />

      </div>

    </div>
  );
}