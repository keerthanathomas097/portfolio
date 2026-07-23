import React from 'react';
import { motion } from 'framer-motion';
import { OctopusHero, SocialIcon } from './OctopusSVG';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" style={styles.section}>
      {/* Scroll-guided tentacle SVG line that leads down the section */}
      <div style={styles.tentacleWrapper}>
        <svg viewBox="0 0 100 800" width="100%" height="100%" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
          {/* Decorative continuous path representing an extended tentacle flowing down */}
          <motion.path
            d="M 50,0 Q 80,200 15,400 T 50,800"
            fill="none"
            stroke="rgba(22, 50, 79, 0.15)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="container" style={styles.container}>
        <div style={styles.grid}>
          {/* Hero Left: Title and Taglines */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={styles.textBlock}
          >
            <motion.span variants={itemVariants} className="section-label">
              00 — INTRODUCTION
            </motion.span>
            
            <motion.h1 variants={itemVariants} style={styles.name}>
              Keerthana Thomas
            </motion.h1>
            
            <motion.h2 variants={itemVariants} style={styles.title}>
              AI Research · Data Science · MCA Student
            </motion.h2>
            
            <motion.p variants={itemVariants} style={styles.tagline}>
              Integrated MCA student exploring data science, AI research, and applied machine learning. Dedicated to solving complex problems through mathematical precision and deep learning.
            </motion.p>

            {/* Social Link Row */}
            <motion.div variants={itemVariants} style={styles.socialRow}>
              <a
                href="https://github.com/keerthanathomas097"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                title="GitHub Profile"
              >
                <SocialIcon type="github" />
                <span style={styles.socialText}>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/keerthana-thomas/"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                title="LinkedIn Profile"
              >
                <SocialIcon type="linkedin" />
                <span style={styles.socialText}>LinkedIn</span>
              </a>
              <a
                href="https://public.tableau.com/app/profile/keerthana.thomas/vizzes"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                title="Tableau Public Profile"
              >
                <SocialIcon type="tableau" />
                <span style={styles.socialText}>Tableau</span>
              </a>
              <a
                href="https://substack.com/@ktroman99"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                title="Substack Writing"
              >
                <SocialIcon type="substack" />
                <span style={styles.socialText}>Substack</span>
              </a>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div variants={itemVariants} style={styles.ctaRow}>
              <button onClick={handleContactClick} className="cta-button">
                Get In Touch
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                  <path d="M2 10L10 2M10 2H4M10 2V8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('research')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                style={styles.secondaryCta}
              >
                View Research Abstract
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Right: Floating Octopus Continuous Line Art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            style={styles.imageBlock}
          >
            {/* Animated breathing/floating container */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={styles.octopusContainer}
            >
              <OctopusHero className="hero-octopus-svg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '140px 0 100px',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
  },
  tentacleWrapper: {
    position: 'absolute',
    top: 0,
    right: '5%',
    width: '30%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
    opacity: 0.6,
  },
  container: {
    zIndex: 2,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '40px',
    alignItems: 'center',
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: 'var(--color-ink-navy)',
    marginBottom: '8px',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: '400',
    color: 'var(--color-mid-blue)',
    fontFamily: 'var(--font-sans)',
    letterSpacing: '0.02em',
    marginBottom: '24px',
  },
  tagline: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '32px',
    color: 'var(--color-deep-blue)',
    opacity: 0.9,
    maxWidth: '580px',
  },
  socialRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '40px',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: 'var(--color-deep-blue)',
    borderBottom: '1px solid transparent',
    paddingBottom: '2px',
  },
  socialText: {
    fontFamily: 'var(--font-sans)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '0.75rem',
  },
  ctaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  secondaryCta: {
    fontSize: '0.85rem',
    fontWeight: '500',
    color: 'var(--color-deep-blue)',
    fontFamily: 'var(--font-sans)',
    borderBottom: '1px solid var(--color-mid-blue)',
    paddingBottom: '2px',
  },
  imageBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  octopusContainer: {
    width: '100%',
    maxWidth: '380px',
  },
};

// Add responsiveness styling dynamically to keep things simple
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (max-width: 992px) {
      #home .container > div {
        grid-template-columns: 1fr !important;
        gap: 60px !important;
      }
      #home h1 {
        font-size: 2.8rem !important;
      }
      #home .hero-octopus-svg {
        max-width: 280px !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
