import React from 'react';
import { motion } from 'framer-motion';

export default function Writing() {
  return (
    <section id="writing" style={styles.section}>
      <div className="container">
        <span className="section-label">07 — LONG-FORM ESSAYS</span>
        <h2 className="section-title">Writing &amp; Strategy</h2>

        <div style={styles.contentContainer}>
          <div style={styles.grid}>
            {/* Left side: narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              style={styles.textBlock}
            >
              <h3 style={styles.essayTitle}>Digital Writing Portfolio on Substack</h3>
              <p style={styles.essayDesc}>
                I run a digital writing channel on Substack where I publish long-form writing, technical explainers, and research essays focusing on data analysis, machine learning applications, and academic discoveries. 
              </p>
              <p style={styles.essayDesc}>
                My writing bridges technical precision with general accessibility, ensuring that complex algorithms, data trends, and data ethics are explained clearly for all audiences.
              </p>
              
              <div style={styles.ctaWrapper}>
                <a
                  href="https://substack.com/@ktroman99"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button"
                >
                  Visit substack.com/@ktroman99
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                    <path d="M2 10L10 2M10 2H4M10 2V8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right side: Mock line-art article cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              style={styles.cardsBlock}
            >
              <div className="flat-card" style={styles.miniCard}>
                <span style={styles.cardTag}>Data Science Explainer</span>
                <h4 style={styles.miniTitle}>Understanding Squeeze-and-Excitation in Vision Transformers</h4>
                <p style={styles.miniDesc}>A deep dive into how channel-wise attention improves classification accuracy in neural architectures.</p>
              </div>

              <div className="flat-card" style={styles.miniCard}>
                <span style={styles.cardTag}>Industry Analysis</span>
                <h4 style={styles.miniTitle}>The Evolution of Domain-Specific LLM Fine-Tuning</h4>
                <p style={styles.miniDesc}>Why small, fine-tuned models like Phi-3 are changing domestic workflows in niche domains like finance and taxation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    marginTop: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '50px',
    alignItems: 'center',
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  essayTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.6rem',
    color: 'var(--color-ink-navy)',
  },
  essayDesc: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: 'var(--color-deep-blue)',
    opacity: 0.9,
  },
  ctaWrapper: {
    marginTop: '10px',
  },
  cardsBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  miniCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '20px',
  },
  cardTag: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.65rem',
    fontWeight: '600',
    color: 'var(--color-accent-coral)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  miniTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.1rem',
    color: 'var(--color-ink-navy)',
    fontWeight: '600',
  },
  miniDesc: {
    fontSize: '0.85rem',
    color: 'var(--color-deep-blue)',
    opacity: 0.8,
  },
};

// Add responsive styles
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (max-width: 768px) {
      #writing .container > div > div {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
