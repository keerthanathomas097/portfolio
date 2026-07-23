import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Data & Analytics',
    skills: [
      'Power BI',
      'Tableau (Active projects on Tableau Cloud)',
      'Pandas',
      'Foundational Data Analytics',
      'Structured Database Querying',
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      'Deep Learning Model Development',
      'Iterative Model Training (CNNs, Attention Mechanisms)',
      'LLM Fine-Tuning (Unsloth, Phi-3 Mini)',
      'Gradio AI App Interfaces',
      'Workflow Automation (n8n integration)',
    ],
  },
  {
    category: 'Web Development',
    skills: [
      'React.js',
      'Node.js & Express',
      'MongoDB',
      'MySQL',
      'PHP',
      'HTML5 & CSS3 (Vanilla CSS variables)',
    ],
  },
  {
    category: 'Content & Communication',
    skills: [
      'Research-Driven Writing',
      'Blog & Essay Writing',
      'Content Pipeline Management',
      'Editing & Proofreading',
      'Topic & Target Audience Analysis',
      'Documentation & Technical Writing',
    ],
  },
  {
    category: 'Design',
    skills: [
      'Graphic & Visual Design',
      'Layout Design',
      'Visual Communication Principles',
      'Data Visualization Architecture',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <div className="container">
        <span className="section-label">04 — SKILLS &amp; METHODOLOGY</span>
        <h2 className="section-title">Skills &amp; Tools</h2>

        <div style={styles.grid}>
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flat-card"
              style={styles.card}
            >
              <h3 style={styles.categoryTitle}>{group.category}</h3>
              <ul style={styles.skillsList}>
                {group.skills.map((skill) => (
                  <li key={skill} style={styles.skillItem}>
                    <span style={styles.bullet}>~</span>
                    <span style={styles.skillText}>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#ffffff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  categoryTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
    color: 'var(--color-ink-navy)',
    borderBottom: '1px solid rgba(22, 50, 79, 0.1)',
    paddingBottom: '10px',
  },
  skillsList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '0.95rem',
    lineHeight: '1.4',
  },
  bullet: {
    fontFamily: 'var(--font-serif)',
    color: 'var(--color-accent-coral)',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    lineHeight: '1',
  },
  skillText: {
    color: 'var(--color-deep-blue)',
    opacity: 0.9,
  },
};
