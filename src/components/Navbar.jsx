import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Bio', id: 'about' },
  { label: 'Research', id: 'research' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Writing', id: 'writing' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      
      // Check which section is in view
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
      
      // Fallback to top if scroll is at the top
      if (window.scrollY < 100) {
        setActiveId('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // offset
        behavior: 'smooth',
      });
    } else if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} style={styles.logo}>
          <span style={styles.logoIcon}>🐙</span>
          <span style={styles.logoText}>Keerthana Thomas</span>
        </a>

        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`nav-link ${activeId === item.id ? 'active' : ''}`}
              style={{
                ...styles.navLink,
                color: activeId === item.id ? 'var(--color-accent-coral)' : 'var(--color-deep-blue)',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={styles.mobileMenuButton}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-blue)" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <nav style={styles.mobileNav}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                style={{
                  ...styles.mobileNavLink,
                  color: activeId === item.id ? 'var(--color-accent-coral)' : 'var(--color-deep-blue)',
                  fontWeight: activeId === item.id ? '600' : '400',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '70px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderBottom: '1px solid rgba(22, 50, 79, 0.1)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '600',
    color: 'var(--color-ink-navy)',
    fontFamily: 'var(--font-serif)',
    fontSize: '1.2rem',
  },
  logoIcon: {
    fontSize: '1.3rem',
  },
  logoText: {
    letterSpacing: '0.02em',
  },
  desktopNav: {
    display: 'flex',
    gap: '24px',
  },
  navLink: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  mobileMenu: {
    position: 'absolute',
    top: '70px',
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid rgba(22, 50, 79, 0.1)',
    padding: '20px 0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  mobileNavLink: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    padding: '8px 0',
    width: '100%',
    textAlign: 'center',
  },
  // CSS media query overrides handled responsively or inside component styling
};

// Add responsive media query styles dynamically if needed
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (max-width: 768px) {
      header nav {
        display: none !important;
      }
      header button {
        display: block !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
