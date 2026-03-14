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
    <div className="bg-dark-bg min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <BeforeAfter />
      <Photo3DCard />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}
