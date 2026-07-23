import React from 'react';
import { motion } from 'framer-motion';
import { FocusIcon } from './OctopusSVG';

export default function About() {
  const focusAreas = [
    {
      title: 'Data Science & Analytics',
      desc: 'Analyzing structured datasets, building dashboards in Tableau & Power BI, and processing with Pandas.',
      iconType: 'analytics',
    },
    {
      title: 'AI Research',
      desc: 'Developing deep learning models, Vision Transformers (ViT), and fine-tuning Large Language Models (LLMs).',
      iconType: 'ai',
    },
    {
      title: 'Technical & Research Writing',
      desc: 'Synthesizing complex technical and scientific publications into comprehensive write-ups and documentations.',
      iconType: 'writing',
    },
    {
      title: 'Content Strategy',
      desc: 'Managing content pipelines from research to publishing; writing articles and blog posts for tech startups.',
      iconType: 'default',
    },
    {
      title: 'UI/UX Design',
      desc: 'Designing layouts, data presentations, and visual frameworks with a focus on human computer interaction.',
      iconType: 'design',
    },
  ];

  return (
    <section id="about" style={styles.section}>
      <div className="container">
        <span className="section-label">01 — BIO &amp; FOCUS AREAS</span>
        <h2 className="section-title">About Me</h2>

        <div style={styles.grid}>
          {/* Left Block: Narrative Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            style={styles.bioText}
          >
            <p style={styles.paragraph}>
              I am a 4th-year <strong>Integrated Master of Computer Applications (MCA)</strong> student at <strong>Amal Jyothi College of Engineering, Kanjirapally</strong> (2022 – 2027), holding a current academic standing of <strong>CGPA 8.69 / 10</strong>.
            </p>
            <p style={styles.paragraph}>
              My academic and professional journey is defined by a strong analytical mindset combined with hands-on experience spanning data analytics, AI research, and technical writing. I enjoy bridging the gap between rigorous scientific research and functional full-stack web applications.
            </p>
            <p style={styles.paragraph}>
              Whether training Vision Transformers for medical imaging, fine-tuning LLMs on specific domains, or building visual dashboard architectures for stakeholders, I apply a meticulous, iterative process to deliver robust, data-driven solutions.
            </p>
          </motion.div>

          {/* Right Block: Core stats / education outline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            style={styles.statsCard}
          >
            <h3 style={styles.statsTitle}>Academic Focus</h3>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>Current Education</span>
              <span style={styles.statVal}>Integrated MCA (4th Year)</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>Institution</span>
              <span style={styles.statVal}>Amal Jyothi College of Engineering</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>Academic Standing</span>
              <span style={styles.statVal}>CGPA 8.69 / 10</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>Primary Research</span>
              <span style={styles.statVal}>Computer Vision &amp; Deep Learning</span>
            </div>
          </motion.div>
        </div>

        {/* Focus Areas Grid */}
        <div style={styles.focusContainer}>
          <h3 style={styles.focusHeading}>Core Strengths</h3>
          <div style={styles.focusGrid}>
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flat-card"
                style={styles.focusCard}
              >
                <div style={styles.iconWrapper}>
                  <FocusIcon type={area.iconType} />
                </div>
                <h4 style={styles.cardTitle}>{area.title}</h4>
                <p style={styles.cardDesc}>{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-bg-pale)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '50px',
    marginBottom: '60px',
  },
  bioText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--color-deep-blue)',
    opacity: 0.95,
  },
  statsCard: {
    border: '1px solid var(--color-border)',
    backgroundColor: '#ffffff',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  statsTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.3rem',
    marginBottom: '8px',
    color: 'var(--color-ink-navy)',
    borderBottom: '1px solid rgba(22, 50, 79, 0.1)',
    paddingBottom: '10px',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  statLabel: {
    fontSize: '0.75rem',
    fontFamily: 'var(--font-sans)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--color-mid-blue)',
  },
  statVal: {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--color-ink-navy)',
  },
  focusContainer: {
    marginTop: '60px',
  },
  focusHeading: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.6rem',
    marginBottom: '30px',
    textAlign: 'center',
    color: 'var(--color-ink-navy)',
  },
  focusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
  focusCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    minHeight: '180px',
  },
  iconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    border: '1px solid rgba(22, 50, 79, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
    color: 'var(--color-ink-navy)',
    backgroundColor: 'var(--color-bg-pale)',
  },
  cardTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--color-ink-navy)',
  },
  cardDesc: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: 'var(--color-deep-blue)',
    opacity: 0.85,
  },
};

// Add responsiveness styling dynamically to keep things simple
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (max-width: 768px) {
      #about .container > div:first-of-type {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
