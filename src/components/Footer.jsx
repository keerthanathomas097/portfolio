import React from 'react';
import { OctopusFooter, SocialIcon } from './OctopusSVG';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.grid}>
          {/* Left Column: Contact info */}
          <div style={styles.contactDetails}>
            <span className="section-label">09 — INK CONNECTION</span>
            <h2 style={styles.heading}>Get In Touch</h2>
            <p style={styles.desc}>
              I am open to internships, project collaborations, and writing opportunities. Whether you want to discuss AI research, data analytics, or technical strategy, feel free to reach out.
            </p>

            <div style={styles.emailBlock}>
              <span style={styles.emailLabel}>DIRECT CONTACT</span>
              <a href="mailto:keerthanathomas097@gmail.com" style={styles.emailLink}>
                keerthanathomas097@gmail.com
              </a>
            </div>

            {/* Repeat Social Links */}
            <div style={styles.socialRow}>
              <a
                href="https://github.com/keerthanathomas097"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                title="GitHub Profile"
              >
                <SocialIcon type="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/keerthana-thomas/"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                title="LinkedIn Profile"
              >
                <SocialIcon type="linkedin" />
              </a>
              <a
                href="https://public.tableau.com/app/profile/keerthana.thomas/vizzes"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                title="Tableau Public Profile"
              >
                <SocialIcon type="tableau" />
              </a>
              <a
                href="https://substack.com/@ktroman99"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
                title="Substack Writing"
              >
                <SocialIcon type="substack" />
              </a>
            </div>
          </div>

          {/* Right Column: Curling Octopus Line-Art */}
          <div style={styles.artBlock}>
            <div style={styles.octopusWrapper}>
              <OctopusFooter className="footer-octopus-svg" />
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={styles.bottomBar}>
          <p style={styles.copyText}>
            © {currentYear} Keerthana Thomas. All rights reserved. · Built with React, Vite &amp; Framer Motion
          </p>
          <span style={styles.creditLabel}>Octopus Continuous Line-Art Theme</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--color-bg-pale)',
    borderTop: '1px solid rgba(22, 50, 79, 0.1)',
    padding: '100px 0 40px',
    overflow: 'hidden',
    position: 'relative',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '60px',
    alignItems: 'center',
    marginBottom: '80px',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  heading: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2.5rem',
    color: 'var(--color-ink-navy)',
    lineHeight: '1.1',
  },
  desc: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: 'var(--color-deep-blue)',
    opacity: 0.9,
    maxWidth: '540px',
  },
  emailBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    margin: '10px 0',
  },
  emailLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.7rem',
    fontWeight: '600',
    color: 'var(--color-mid-blue)',
    letterSpacing: '0.1em',
  },
  emailLink: {
    fontSize: '1.4rem',
    fontFamily: 'var(--font-serif)',
    fontWeight: '600',
    color: 'var(--color-ink-navy)',
    borderBottom: '1px solid var(--color-accent-coral)',
    paddingBottom: '2px',
    alignSelf: 'flex-start',
    transition: 'border-color var(--transition-fast), color var(--transition-fast)',
    '&:hover': {
      color: 'var(--color-accent-coral)',
    },
  },
  socialRow: {
    display: 'flex',
    gap: '16px',
  },
  socialLink: {
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    border: '1px solid rgba(22, 50, 79, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    color: 'var(--color-deep-blue)',
    transition: 'all var(--transition-fast)',
    '&:hover': {
      backgroundColor: 'var(--color-accent-coral)',
      borderColor: 'var(--color-accent-coral)',
      color: '#ffffff',
    },
  },
  artBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  octopusWrapper: {
    width: '100%',
    maxWidth: '220px',
    opacity: 0.85,
  },
  bottomBar: {
    borderTop: '1px solid rgba(22, 50, 79, 0.1)',
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  copyText: {
    fontSize: '0.85rem',
    color: 'var(--color-deep-blue)',
    opacity: 0.8,
  },
  creditLabel: {
    fontSize: '0.75rem',
    fontFamily: 'var(--font-sans)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--color-mid-blue)',
    fontWeight: '600',
  },
};

// Add responsive styling dynamically
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    #contact emailLink:hover {
      color: var(--color-accent-coral) !important;
    }
    #contact .socialLink:hover {
      border-color: var(--color-accent-coral) !important;
      background-color: var(--color-accent-coral) !important;
    }
    #contact .socialLink:hover svg {
      stroke: #ffffff !important;
    }
    @media (max-width: 768px) {
      #contact .container > div:first-of-type {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      #contact .bottomBar {
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
