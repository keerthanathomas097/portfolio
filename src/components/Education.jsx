import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" style={styles.section}>
      <div className="container">
        <span className="section-label">08 — ACADEMIC FOUNDATION</span>
        <h2 className="section-title">Education</h2>

        <div style={styles.contentContainer}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flat-card"
            style={styles.card}
          >
            <div style={styles.header}>
              <div style={styles.titleBlock}>
                <h3 style={styles.college}>Amal Jyothi College of Engineering</h3>
                <span style={styles.location}>Kanjirapally, Kerala</span>
              </div>
              <span style={styles.years}>2022 – 2027</span>
            </div>

            <div style={styles.details}>
              <div style={styles.degreeRow}>
                <span style={styles.degreeLabel}>Degree:</span>
                <span style={styles.degreeVal}>
                  Integrated Master of Computer Applications (MCA) — 4th Year
                </span>
              </div>

              <div style={styles.cgpaRow}>
                <span style={styles.cgpaLabel}>Academic Standing:</span>
                <span style={styles.cgpaVal}>CGPA 8.69 / 10</span>
              </div>
            </div>

            <div style={styles.context}>
              <p style={styles.contextText}>
                The Integrated MCA curriculum provides a comprehensive pathway covering advanced algorithms, database engineering, system design, software engineering methodologies, and hands-on laboratory courses. Coursework is aligned with modern technological paradigms, emphasizing practical systems construction and research project iterations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-bg-pale)',
  },
  contentContainer: {
    marginTop: '40px',
    maxWidth: '800px',
    margin: '40px auto 0',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '40px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid rgba(22, 50, 79, 0.1)',
    paddingBottom: '16px',
    flexWrap: 'wrap',
    gap: '12px',
  },
  titleBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  college: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.6rem',
    color: 'var(--color-ink-navy)',
  },
  location: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    color: 'var(--color-mid-blue)',
    fontWeight: '500',
  },
  years: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--color-ink-navy)',
    backgroundColor: '#ffffff',
    border: '1px solid var(--color-border)',
    padding: '4px 12px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  degreeRow: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  degreeLabel: {
    fontWeight: '600',
    color: 'var(--color-mid-blue)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-sans)',
    minWidth: '150px',
  },
  degreeVal: {
    color: 'var(--color-deep-blue)',
    fontSize: '0.95rem',
  },
  cgpaRow: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  cgpaLabel: {
    fontWeight: '600',
    color: 'var(--color-mid-blue)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-sans)',
    minWidth: '150px',
  },
  cgpaVal: {
    color: 'var(--color-ink-navy)',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  context: {
    backgroundColor: 'var(--color-bg-pale)',
    padding: '20px',
    borderLeft: '2px solid var(--color-mid-blue)',
  },
  contextText: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    color: 'var(--color-deep-blue)',
    opacity: 0.85,
  },
};
