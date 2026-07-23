import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Data Analyst Intern',
    company: 'Splash Design Ltd',
    location: 'Stockport, UK (Remote)',
    duration: 'Jun 2026 – Jun 2026',
    bulletPoints: [
      'Built a structured exhibitor database of 150–300 records sourced from international trade shows, covering stand data by sector, country, and priority.',
      'Developed a live Power BI dashboard connected to the database, enabling real-time visual insight into exhibitor data for stakeholder use.',
      'Created a lightweight web-based CRM (MERN stack) to manage and track prospects through a lead pipeline from initial contact to qualification.',
    ],
  },
  {
    role: 'Operations & Tech Intern',
    company: 'Professional Couriers (Cochin-North) Pvt. Ltd',
    location: 'Kochi (On-site)',
    duration: 'Jun 2026',
    bulletPoints: [
      'Participated in day-to-day logistics operations including packing, consignment handling, and ground-level logistics workflow.',
      'Developed a prototype data entry web application (React, Node.js, MySQL) for logging goods and consignment records.',
    ],
  },
  {
    role: 'Content Writer & Business Development Associate',
    company: 'Tech and Creative Agency, Kerala',
    location: 'Freelance / Volunteer',
    duration: '2024 – 2025',
    bulletPoints: [
      'Wrote blog posts, articles, and marketing content; managed full content pipeline from research to publishing.',
      'Contributed to business development efforts for the agency.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <div className="container">
        <span className="section-label">05 — PROFESSIONAL ROADMAP</span>
        <h2 className="section-title">Work Experience</h2>

        <div style={styles.timelineContainer}>
          {/* SVG Spine Line */}
          <div style={styles.spineWrapper}>
            <svg
              viewBox="0 0 40 600"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              {/* Spine Path: Wavy for desktop, straight vertical on mobile via CSS overrides */}
              <motion.path
                d="M 20,0 Q 40,150 5,300 T 20,600"
                fill="none"
                stroke="var(--color-mid-blue)"
                strokeWidth="1.5"
                className="timeline-spine-path"
              />
            </svg>
          </div>

          {/* Timeline Items */}
          <div style={styles.itemsList}>
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={styles.item}
              >
                {/* Node marker */}
                <div style={styles.node} className="timeline-node-circle" />

                <div className="flat-card" style={styles.infoCard}>
                  <div style={styles.headerRow}>
                    <div>
                      <h3 style={styles.roleTitle}>{exp.role}</h3>
                      <h4 style={styles.companyTitle}>
                        {exp.company} <span style={styles.location}>· {exp.location}</span>
                      </h4>
                    </div>
                    <span style={styles.duration}>{exp.duration}</span>
                  </div>

                  <ul style={styles.bulletList}>
                    {exp.bulletPoints.map((pt, ptIdx) => (
                      <li key={ptIdx} style={styles.bulletPoint}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
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
    backgroundColor: '#ffffff',
  },
  timelineContainer: {
    position: 'relative',
    padding: '20px 0',
    marginTop: '40px',
  },
  spineWrapper: {
    position: 'absolute',
    left: '10px',
    top: 0,
    width: '40px',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  },
  itemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    paddingLeft: '50px', // spacing away from spine
  },
  item: {
    position: 'relative',
  },
  node: {
    position: 'absolute',
    left: '-46px', // Align precisely on top of the spine
    top: '30px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid var(--color-ink-navy)',
    backgroundColor: '#ffffff',
    zIndex: 5,
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '12px',
    borderBottom: '1px solid rgba(22, 50, 79, 0.1)',
    paddingBottom: '12px',
  },
  roleTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.35rem',
    color: 'var(--color-ink-navy)',
  },
  companyTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'var(--color-mid-blue)',
    marginTop: '2px',
  },
  location: {
    fontWeight: '400',
    opacity: 0.8,
  },
  duration: {
    fontSize: '0.85rem',
    fontFamily: 'var(--font-sans)',
    color: 'var(--color-deep-blue)',
    opacity: 0.8,
    fontWeight: '500',
    border: '1px solid rgba(22, 50, 79, 0.2)',
    padding: '3px 8px',
    backgroundColor: 'var(--color-bg-pale)',
  },
  bulletList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  bulletPoint: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: 'var(--color-deep-blue)',
    opacity: 0.9,
    position: 'relative',
    paddingLeft: '16px',
    // Custom inline marker
    '&::before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: 'var(--color-accent-coral)',
    },
  },
};

// Add responsive / mobile styles dynamically
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    /* Bullet points styling helper */
    #experience ul li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--color-accent-coral);
      font-weight: bold;
    }
    
    @media (max-width: 768px) {
      /* Simplify spine from wavy to straight vertical */
      .timeline-spine-path {
        d: path('M 20,0 L 20,600') !important;
      }
      #experience .timelineContainer {
        padding-left: 0px !important;
      }
      #experience .itemsList {
        padding-left: 35px !important;
      }
      #experience .timeline-node-circle {
        left: -31px !important;
      }
      #experience .spineWrapper {
        left: 4px !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
