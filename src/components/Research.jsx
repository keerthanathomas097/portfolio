import React from 'react';
import { motion } from 'framer-motion';

export default function Research() {
  const tags = [
    'CNNs',
    'Transformer Models',
    'Attention Mechanisms',
    'Deep Learning',
    'Medical Imaging',
    'Multi-class Classification',
  ];

  const phases = [
    {
      title: 'Architecture Design',
      desc: 'Investigated hybrid models linking convolutional neural network concepts with transformer layers to extract both localized feature responses and global sequence context.',
    },
    {
      title: 'Model Training',
      desc: 'Conducted training iterations over several months, evaluating loss function behaviors, training stability, and dataset classification challenges under various splits.',
    },
    {
      title: 'Parametric Tuning',
      desc: 'Optimized model configuration parameters such as regularizations, learning schedules, and layer distributions based on cross-validation metrics.',
    },
    {
      title: 'Review & Refinement',
      desc: 'Engaged in multiple rounds of internal research review and document draft updates to verify the integrity and reproducibility of the experimental analysis.',
    },
  ];

  return (
    <section id="research" style={styles.section}>
      <div className="container">
        <span className="section-label">02 — FLAGSHIP RESEARCH</span>
        <h2 className="section-title">Academic &amp; AI Research</h2>

        <div style={styles.abstractContainer}>
          <div style={styles.abstractHeader}>
            <div style={styles.headerTitleArea}>
              <span style={styles.projectType}>Undergraduate Research Project · 2024 – 2025</span>
              <h3 style={styles.researchTitle}>
                Brain Tumor MRI Classification using SE-ViT
              </h3>
            </div>
            
            {/* Conference Badge Citation */}
            <div style={styles.citationBadge}>
              <span style={styles.citationLabel}>CONFERENCE PUBLICATION</span>
              <span style={styles.citationText}>
                Presented at the <strong>AICERA-ICAISCST 2026 International Conference</strong> (April 2026)
              </span>
              <span style={styles.citationNote}>
                🏆 Recipient of Certificate of Appreciation
              </span>
            </div>
          </div>

          <div style={styles.grid}>
            {/* Left Column: Abstract Text & Citation */}
            <div style={styles.leftCol}>
              <h4 style={styles.subHeading}>Abstract</h4>
              <p style={styles.abstractBody}>
                This research explores advanced computer vision and deep learning architectures applied to medical imaging analysis. The project focuses on assessing and comparing hybrid neural network models to improve multi-class classification accuracy in complex diagnostic datasets, specifically targeting brain tumor identification from MRI scans.
              </p>
              <p style={styles.abstractBody}>
                By studying how attention mechanisms and transformer-based layers integrate with standard convolutional features, the study aims to design a robust framework for medical image classification. The research focuses on the general task of improving representational capacity, model generalizability, and training efficiency under variable sample constraints.
              </p>
              
              <div style={styles.tagsContainer}>
                {tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Architecture Flow */}
            <div style={styles.rightCol}>
              <h4 style={styles.subHeading}>Hybrid SE-ViT Architecture Flow</h4>
              <div style={styles.diagramBox}>
                {/* Custom Inline SVG Diagram */}
                <svg viewBox="0 0 320 340" width="100%" height="100%" style={{ overflow: 'visible' }}>
                  {/* Flow connection lines */}
                  <path d="M 160,35 L 160,60" fill="none" stroke="#3d6d9e" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M 160,95 L 160,120" fill="none" stroke="#3d6d9e" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M 160,155 L 160,180" fill="none" stroke="#3d6d9e" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M 160,215 L 160,240" fill="none" stroke="#3d6d9e" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M 160,275 L 160,300" fill="none" stroke="#3d6d9e" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Block 1: Input */}
                  <rect x="70" y="10" width="180" height="25" rx="3" fill="#f4f7fa" stroke="#16324f" strokeWidth="1" />
                  <text x="160" y="26" textAnchor="middle" fontSize="9" fontFamily="var(--font-sans)" fill="#0f2942" fontWeight="600">INPUT MRI SCAN (2D/3D)</text>
                  
                  {/* Block 2: CNN & SE Module */}
                  <rect x="50" y="60" width="220" height="35" rx="3" fill="#ffffff" stroke="#16324f" strokeWidth="1.5" />
                  <text x="160" y="76" textAnchor="middle" fontSize="10" fontFamily="var(--font-sans)" fill="#0f2942" fontWeight="600">Feature Extractor Node</text>
                  <text x="160" y="88" textAnchor="middle" fontSize="8" fontFamily="var(--font-sans)" fill="#3d6d9e">Channel Attention Mechanisms</text>

                  {/* Block 3: Patch Extraction */}
                  <rect x="50" y="120" width="220" height="35" rx="3" fill="#ffffff" stroke="#16324f" strokeWidth="1.5" />
                  <text x="160" y="136" textAnchor="middle" fontSize="10" fontFamily="var(--font-sans)" fill="#0f2942" fontWeight="600">Linear Projection Node</text>
                  <text x="160" y="148" textAnchor="middle" fontSize="8" fontFamily="var(--font-sans)" fill="#3d6d9e">Sequential Data Tokenization</text>

                  {/* Block 4: ViT Encoder */}
                  <rect x="50" y="180" width="220" height="35" rx="3" fill="#ffffff" stroke="#16324f" strokeWidth="1.5" />
                  <text x="160" y="196" textAnchor="middle" fontSize="10" fontFamily="var(--font-sans)" fill="#0f2942" fontWeight="600">Sequence Encoder Node</text>
                  <text x="160" y="208" textAnchor="middle" fontSize="8" fontFamily="var(--font-sans)" fill="#3d6d9e">Multi-Head Attention layers</text>

                  {/* Block 5: MLP Head */}
                  <rect x="70" y="240" width="180" height="35" rx="3" fill="#ffffff" stroke="#16324f" strokeWidth="1.5" />
                  <text x="160" y="256" textAnchor="middle" fontSize="10" fontFamily="var(--font-sans)" fill="#0f2942" fontWeight="600">MLP Classification Head</text>
                  <text x="160" y="268" textAnchor="middle" fontSize="8" fontFamily="var(--font-sans)" fill="#3d6d9e">Softmax layer activation</text>

                  {/* Block 6: Output Class */}
                  <rect x="70" y="300" width="180" height="25" rx="3" fill="#f4f7fa" stroke="#e08a5e" strokeWidth="1.5" />
                  <text x="160" y="316" textAnchor="middle" fontSize="9" fontFamily="var(--font-sans)" fill="#0f2942" fontWeight="600">GLIOMA / MENINGIOMA / PITUITARY</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Iterative Methodology / Timeline */}
          <div style={styles.methodology}>
            <h4 style={styles.subHeadingCenter}>Development &amp; Validation Methodology</h4>
            <div style={styles.phasesGrid}>
              {phases.map((phase, index) => (
                <div key={phase.title} style={styles.phaseCard}>
                  <div style={styles.phaseNumber}>0{index + 1}</div>
                  <h5 style={styles.phaseTitle}>{phase.title}</h5>
                  <p style={styles.phaseDesc}>{phase.desc}</p>
                </div>
              ))}
            </div>
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
  abstractContainer: {
    border: '1px solid var(--color-border)',
    padding: '40px',
    backgroundColor: '#ffffff',
  },
  abstractHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '30px',
    borderBottom: '1px solid rgba(22, 50, 79, 0.1)',
    paddingBottom: '30px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  headerTitleArea: {
    flex: '1 1 500px',
  },
  projectType: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--color-mid-blue)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '8px',
  },
  researchTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2rem',
    color: 'var(--color-ink-navy)',
    lineHeight: '1.2',
  },
  citationBadge: {
    flex: '0 1 320px',
    border: '1px solid var(--color-mid-blue)',
    backgroundColor: 'var(--color-bg-pale)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  citationLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.65rem',
    fontWeight: '600',
    letterSpacing: '0.15em',
    color: 'var(--color-accent-coral)',
  },
  citationText: {
    fontSize: '0.85rem',
    lineHeight: '1.4',
    color: 'var(--color-deep-blue)',
  },
  citationNote: {
    fontSize: '0.8rem',
    fontStyle: 'italic',
    color: 'var(--color-ink-navy)',
    marginTop: '4px',
    display: 'block',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '40px',
    marginBottom: '40px',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  subHeading: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
    color: 'var(--color-ink-navy)',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  subHeadingCenter: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.35rem',
    color: 'var(--color-ink-navy)',
    marginBottom: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  abstractBody: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: 'var(--color-deep-blue)',
    opacity: 0.9,
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  diagramBox: {
    border: '1px solid rgba(22, 50, 79, 0.1)',
    backgroundColor: 'var(--color-bg-pale)',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '340px',
  },
  methodology: {
    borderTop: '1px solid rgba(22, 50, 79, 0.1)',
    paddingTop: '40px',
    marginTop: '20px',
  },
  phasesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
  },
  phaseCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  phaseNumber: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.75rem',
    color: 'var(--color-mid-blue)',
    lineHeight: '1',
    opacity: 0.6,
  },
  phaseTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--color-ink-navy)',
  },
  phaseDesc: {
    fontSize: '0.85rem',
    lineHeight: '1.5',
    color: 'var(--color-deep-blue)',
    opacity: 0.8,
  },
};

// Add responsive overrides
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (max-width: 992px) {
      #research .abstractContainer {
        padding: 24px !important;
      }
      #research .abstractContainer > div:nth-of-type(2) {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
      }
      #research .abstractHeader {
        flex-direction: column !important;
        gap: 20px !important;
      }
      #research .citationBadge {
        width: 100% !important;
        max-width: 100% !important;
        flex: none !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
