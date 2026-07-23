import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Writing from './components/Writing';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Dynamic top sticky navigation bar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        {/* Hero Banner with large floating octopus */}
        <Hero />

        {/* Narrative bio and focus areas strengths */}
        <About />

        {/* Flagship deep learning SE-ViT brain tumor MRI classification */}
        <Research />

        {/* Portfolio projects with aspect-ratio screenshot frames & carousels */}
        <Projects />

        {/* Text list grouped skills & tools */}
        <Skills />

        {/* Spine-guide professional work experience timeline */}
        <Experience />

        {/* Substack essays section */}
        <Writing />

        {/* Academic Integrated MCA credentials */}
        <Education />
      </main>

      {/* Footer with email link, repeat links and footer octopus */}
      <Footer />
    </>
  );
}
