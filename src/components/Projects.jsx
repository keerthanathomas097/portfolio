import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    title: 'TaxMitra — AI Chatbot for Indian Taxation',
    time: '2025',
    type: 'Personal Project · LLM Fine-tuning',
    desc: 'Fine-tuned Phi-3 Mini on the Indian taxation domain using Unsloth. Created a conversational agent trained on tax laws, deductions, and e-verification guidelines, and built a web interface with Gradio.',
    tech: ['Phi-3 Mini', 'Unsloth', 'LLM Fine-tuning', 'Gradio', 'Python'],
    screenshots: ['/assets/screenshots/image10.png', '/assets/screenshots/image11.png'],
    isSupplementary: false,
  },
  {
    title: 'n8n Workflow Automations',
    time: '2025',
    type: 'Personal Project · Integrations',
    desc: 'This project features a collection of automated workflows built in n8n that integrate scheduled triggers, RSS data fetching, and Google Gemini LLM nodes. It includes an AI News Summarizer that aggregates and drafts tech updates, a web-triggered Podcast Generator utilizing speech synthesis APIs, and a social post generator that publishes content directly to Twitter and LinkedIn. These workflows streamline multi-platform publishing, content generation, and scheduled data feeds.',
    tech: ['n8n', 'Workflow Automation', 'LLM Integration', 'Google Gemini', 'API Integration', 'Webhooks'],
    screenshots: [
      '/assets/screenshots/n8n_news_summarizer.png',
      '/assets/screenshots/n8n_podcast_generator.jpeg',
      '/assets/screenshots/n8n_linkedin_post_generator.jpeg'
    ],
    isSupplementary: false,
  },
  {
    title: 'CRM Website — Splash Design Ltd',
    time: 'Jun 2026',
    type: 'Data Analyst Internship Project',
    desc: 'Developed a lightweight, web-based CRM utilizing the MERN stack to manage and track sales prospects through a lead pipeline. Allows team members to manage stands, exhibitors, sectors, and priority pipelines.',
    tech: ['MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB'],
    screenshots: [
      '/assets/screenshots/image3.png',
      '/assets/screenshots/image4.png',
      '/assets/screenshots/image5.png',
    ],
    isSupplementary: false,
  },
  {
    title: 'Tableau Dashboard — Splash Design Ltd',
    time: 'Jun 2026',
    type: 'Data Analyst Internship Project',
    desc: 'Designed and deployed a live data dashboard connected to a structured trade show database of 150-300 records. Provides stakeholders with real-time visual metrics across countries, sectors, and priority ratings.',
    tech: ['Tableau Cloud', 'Power BI', 'Excel', 'Data Analytics'],
    screenshots: ['/assets/screenshots/image6.png'],
    isSupplementary: false,
    link: 'https://public.tableau.com/app/profile/keerthana.thomas/vizzes',
    linkLabel: 'View Tableau Public Profile',
  },
  {
    title: 'Professional Couriers — Data Entry Web App',
    time: 'Jun 2026',
    type: 'Operations & Tech Internship Project',
    desc: 'Built a prototype data entry web application for logging goods and consignment records (handling consignors, destinations, weight, charges, and totals) while gaining ground-level logistics operations exposure.',
    tech: ['React', 'Node.js', 'MySQL', 'Express', 'Logistics'],
    screenshots: ['/assets/screenshots/image1.png', '/assets/screenshots/image2.png'],
    isSupplementary: false,
  },
  {
    title: 'Clover Outfit Rentals',
    time: '2024',
    type: 'Academic Project',
    desc: 'Outfit rental and wardrobe-sharing e-commerce web platform. Provides options to rent designer outfits (such as lehengas and bridal wear), calculate rental periods, security deposits, and view sizes. Built covering the relational database architecture, backend logic, session management, and responsive front-end design.',
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'E-Commerce', 'Database Architecture', 'Backend Development'],
    screenshots: [
      '/assets/screenshots/image7.png',
      '/assets/screenshots/image8.png',
      '/assets/screenshots/image9.png',
    ],
    isSupplementary: false,
  },
  {
    title: 'Automated Self-Cleaning Washbasin for Hygienic Public and Train Use',
    time: '2025 – Present',
    type: 'College-Funded Interdisciplinary Project — i2U 2025',
    desc: 'Contributing to the second phase of a college-funded hardware/mechanical project. Participating in collaborative design sprints, prototype assemblies, and iterative field testing.',
    tech: ['Hardware Prototyping', 'Iterative Design', 'Collaborative Testing', 'i2U 2025 Contest'],
    screenshots: [],
    isSupplementary: false,
    team: 'Arya Dileep, Keerthana Thomas, Kalyany S Nair, Sulthana Fathima',
    guide: 'Meera Rose Mathew',
    recognition: 'Selected for funding after the Phase-II evaluation of the I2U 2025 Project Contest at Amal Jyothi College of Engineering'
  },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div className="container">
        <span className="section-label">03 — PORTFOLIO PROJECTS</span>
        <h2 className="section-title">Projects &amp; Prototypes</h2>

        <div style={styles.list}>
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasImages = project.screenshots && project.screenshots.length > 0;

  const nextImg = (e) => {
    e.stopPropagation();
    if (project.screenshots) {
      setImgIndex((prev) => (prev + 1) % project.screenshots.length);
    }
  };

  const prevImg = (e) => {
    e.stopPropagation();
    if (project.screenshots) {
      setImgIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
    }
  };

  const cardContentStyle = {
    ...styles.cardContent,
    gridTemplateColumns: hasImages ? '1.2fr 0.8fr' : '1fr',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      style={styles.card}
    >
      <div style={cardContentStyle}>
        {/* Project Details */}
        <div style={styles.detailsBlock}>
          <div style={styles.metaRow}>
            <span style={styles.projectType}>{project.type}</span>
            <span style={styles.timeTag}>{project.time}</span>
          </div>

          <h3 style={styles.projectTitle}>
            {project.title}
          </h3>

          <p style={styles.descText}>{project.desc}</p>

          {/* Render Certificate Callout for Washbasin Project */}
          {project.recognition && (
            <div style={{
              ...styles.certificateCallout,
              gridTemplateColumns: project.certificateImage ? '1.2fr 0.8fr' : '1fr'
            }}>
              <div style={styles.certCalloutHeader}>
                <span style={styles.certLabel}>I2U PROJECT RECOGNITION</span>
                <h4 style={styles.certCalloutTitle}>Certificate of Appreciation</h4>
                <p style={styles.certCalloutDetail}>{project.recognition}</p>
                <div style={styles.certMeta}>
                  <div><strong>Team:</strong> {project.team}</div>
                  <div><strong>Guide:</strong> {project.guide}</div>
                </div>
              </div>
              {project.certificateImage && (
                <div style={styles.certFrame}>
                  <img src={`${import.meta.env.BASE_URL}${project.certificateImage.replace(/^\//, '')}`} alt="i2U Project Certificate" style={styles.certImg} />
                </div>
              )}
            </div>
          )}

          {/* Supplementary Project Banner */}
          {project.isSupplementary && (
            <div style={styles.supplementaryBanner}>
              <span style={styles.suppLabel}>SUPPLEMENTARY PROJECT</span>
              {/* TODO: confirm project details */}
              <span style={styles.suppNote}>Note: Details to be verified by author.</span>
            </div>
          )}

          {/* Tech tags */}
          <div style={styles.techContainer}>
            {project.tech.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Link out if applicable */}
          {project.link && (
            <div style={styles.linkWrapper}>
              <a href={project.link} target="_blank" rel="noreferrer" className="cta-button" style={{ padding: '0.5rem 1rem' }}>
                {project.linkLabel}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                  <path d="M2 10L10 2M10 2H4M10 2V8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* Project Screenshots */}
        {hasImages && (
          <div style={styles.mediaBlock}>
            <div className="screenshot-frame" style={styles.screenshotFrame}>
              <img
                src={`${import.meta.env.BASE_URL}${project.screenshots[imgIndex].replace(/^\//, '')}`}
                alt={`${project.title} screenshot ${imgIndex + 1}`}
                style={styles.img}
              />
              
              {/* Carousel controls if multiple screenshots */}
              {project.screenshots.length > 1 && (
                <>
                  <button onClick={prevImg} style={{ ...styles.carouselBtn, left: '10px' }} aria-label="Previous image">
                    ‹
                  </button>
                  <button onClick={nextImg} style={{ ...styles.carouselBtn, right: '10px' }} aria-label="Next image">
                    ›
                  </button>
                  <div style={styles.indicatorDots}>
                    {project.screenshots.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setImgIndex(dotIdx);
                        }}
                        style={{
                          ...styles.dot,
                          backgroundColor: dotIdx === imgIndex ? 'var(--color-accent-coral)' : 'var(--color-mid-blue)',
                          opacity: dotIdx === imgIndex ? 1 : 0.4,
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-bg-pale)',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    marginTop: '40px',
  },
  card: {
    border: '1px solid var(--color-border)',
    backgroundColor: '#ffffff',
    padding: '30px',
    position: 'relative',
  },
  cardContent: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '40px',
    alignItems: 'center',
  },
  detailsBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  projectType: {
    fontSize: '0.75rem',
    fontFamily: 'var(--font-sans)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--color-mid-blue)',
    fontWeight: '600',
  },
  timeTag: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.8rem',
    color: 'var(--color-deep-blue)',
    opacity: 0.8,
  },
  projectTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.6rem',
    color: 'var(--color-ink-navy)',
    lineHeight: '1.2',
  },
  descText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: 'var(--color-deep-blue)',
    opacity: 0.9,
    whiteSpace: 'pre-line',
  },
  supplementaryBanner: {
    border: '1px dashed var(--color-mid-blue)',
    padding: '8px 12px',
    backgroundColor: 'var(--color-bg-pale)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  suppLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.65rem',
    fontWeight: '600',
    color: 'var(--color-accent-coral)',
    letterSpacing: '0.08em',
  },
  suppNote: {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    color: 'var(--color-deep-blue)',
    opacity: 0.8,
  },
  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  linkWrapper: {
    marginTop: '8px',
  },
  mediaBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  screenshotFrame: {
    aspectRatio: '16/10',
    width: '100%',
    maxWidth: '380px',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  placeholderFrame: {
    border: '1px solid rgba(22, 50, 79, 0.15)',
    backgroundColor: 'var(--color-bg-pale)',
    width: '100%',
    maxWidth: '380px',
    aspectRatio: '16/10',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(15, 41, 66, 0.8)',
    color: '#ffffff',
    border: 'none',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.2rem',
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color var(--transition-fast)',
    zIndex: 10,
  },
  indicatorDots: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '6px',
    zIndex: 10,
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
  },
  
  /* Certificate Callout styling */
  certificateCallout: {
    border: '1px solid var(--color-mid-blue)',
    backgroundColor: 'var(--color-bg-pale)',
    padding: '16px',
    marginTop: '16px',
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '16px',
    alignItems: 'center',
  },
  certCalloutHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  certLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.65rem',
    fontWeight: '600',
    color: 'var(--color-accent-coral)',
    letterSpacing: '0.1em',
  },
  certCalloutTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1rem',
    color: 'var(--color-ink-navy)',
    fontWeight: '600',
  },
  certCalloutDetail: {
    fontSize: '0.8rem',
    lineHeight: '1.4',
    color: 'var(--color-deep-blue)',
  },
  certMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    fontSize: '0.75rem',
    color: 'var(--color-deep-blue)',
    opacity: 0.9,
    marginTop: '4px',
  },
  certFrame: {
    border: '1px solid var(--color-ink-navy)',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    aspectRatio: '1.4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  certImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
};

// Add responsive styles
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (max-width: 992px) {
      #projects .cardContent {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
      }
      #projects .screenshot-frame, #projects .placeholderFrame {
        max-width: 100% !important;
      }
    }
    @media (max-width: 768px) {
      #projects .certificateCallout {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
