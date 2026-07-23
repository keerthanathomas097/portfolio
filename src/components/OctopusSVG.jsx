import React from 'react';

// Common line art stroke properties
const strokeProps = {
  fill: 'none',
  stroke: '#16324f',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

// A stunning continuous line-art octopus visual for the Hero section
export const OctopusHero = ({ className }) => (
  <svg
    viewBox="0 0 400 400"
    className={className}
    style={{ overflow: 'visible' }}
  >
    {/* Head / Mantle */}
    <path
      d="M 200,80 C 120,80 120,170 170,210 C 180,218 185,222 188,226 C 189,228 190,230 190,232"
      {...strokeProps}
    />
    <path
      d="M 200,80 C 280,80 280,170 230,210 C 220,218 215,222 212,226 C 211,228 210,230 210,232"
      {...strokeProps}
    />
    
    {/* Eyes */}
    <circle cx="178" cy="185" r="8" {...strokeProps} />
    <circle cx="178" cy="185" r="2" fill="#16324f" />
    <circle cx="222" cy="185" r="8" {...strokeProps} />
    <circle cx="222" cy="185" r="2" fill="#16324f" />
    <path d="M 188,198 Q 200,205 212,198" {...strokeProps} />

    {/* Brain details / texture */}
    <path d="M 195,100 C 180,110 185,130 200,135 C 215,130 220,110 205,100" {...strokeProps} strokeWidth="1" />
    <path d="M 200,80 L 200,100" {...strokeProps} strokeWidth="1" />

    {/* Tentacles - Elegant, long, continuous curves winding outwards */}
    
    {/* Tentacle 1: Left Outer (winds left and up) */}
    <path
      d="M 170,210 C 110,220 50,180 60,110 C 70,40 130,50 140,100 C 150,150 90,230 150,260"
      {...strokeProps}
    />
    {/* Sucker details T1 */}
    <circle cx="85" cy="185" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="68" cy="150" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="75" cy="100" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="102" cy="74" r="1.5" {...strokeProps} strokeWidth="0.8" />

    {/* Tentacle 2: Left Middle (winds down-left, loops) */}
    <path
      d="M 175,215 C 130,240 80,270 40,240 C 0,210 20,150 60,165 C 100,180 120,230 160,265"
      {...strokeProps}
    />
    {/* Sucker details T2 */}
    <circle cx="108" cy="242" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="62" cy="250" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="34" cy="215" r="1.5" {...strokeProps} strokeWidth="0.8" />

    {/* Tentacle 3: Left Inner (winds down and curls bottom left) */}
    <path
      d="M 185,225 C 160,270 110,320 60,320 C 10,320 20,270 60,270 C 100,270 120,330 170,350"
      {...strokeProps}
    />
    {/* Sucker details T3 */}
    <circle cx="118" cy="295" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="78" cy="308" r="1.5" {...strokeProps} strokeWidth="0.8" />

    {/* Tentacle 4: Central Left (starts going down, merges to the main path that travels down the page) */}
    <path
      d="M 195,232 C 190,270 160,330 180,380 C 190,405 200,430 200,450"
      {...strokeProps}
    />
    <circle cx="184" cy="275" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="170" cy="320" r="1.5" {...strokeProps} strokeWidth="0.8" />
    
    {/* Tentacle 5: Central Right (winds down and right) */}
    <path
      d="M 205,232 C 210,270 240,330 220,380 C 210,405 215,420 230,410 C 245,400 240,370 225,360"
      {...strokeProps}
    />
    <circle cx="218" cy="275" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="232" cy="320" r="1.5" {...strokeProps} strokeWidth="0.8" />

    {/* Tentacle 6: Right Inner (winds down-right and curls bottom right) */}
    <path
      d="M 215,225 C 240,270 290,320 340,320 C 390,320 380,270 340,270 C 300,270 280,330 230,350"
      {...strokeProps}
    />
    <circle cx="282" cy="295" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="322" cy="308" r="1.5" {...strokeProps} strokeWidth="0.8" />

    {/* Tentacle 7: Right Middle (winds right, loops) */}
    <path
      d="M 225,215 C 270,240 320,270 360,240 C 400,210 380,150 340,165 C 300,180 280,230 240,265"
      {...strokeProps}
    />
    <circle cx="292" cy="242" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="338" cy="250" r="1.5" {...strokeProps} strokeWidth="0.8" />

    {/* Tentacle 8: Right Outer (winds right and up) */}
    <path
      d="M 230,210 C 290,220 350,180 340,110 C 330,40 270,50 260,100 C 250,150 310,230 250,260"
      {...strokeProps}
    />
    <circle cx="315" cy="185" r="1.5" {...strokeProps} strokeWidth="0.8" />
    <circle cx="332" cy="150" r="1.5" {...strokeProps} strokeWidth="0.8" />
  </svg>
);

// Curling octopus for the Footer
export const OctopusFooter = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    style={{ overflow: 'visible' }}
  >
    {/* Body */}
    <path
      d="M 100,60 C 60,60 60,110 85,130 C 95,138 105,138 115,130 C 140,110 140,60 100,60 Z"
      {...strokeProps}
    />
    <circle cx="90" cy="100" r="4" {...strokeProps} />
    <circle cx="110" cy="100" r="4" {...strokeProps} />
    
    {/* Whimsical curling tentacles */}
    <path d="M 80,120 C 50,130 30,110 40,80 C 50,50 90,70 80,100" {...strokeProps} />
    <path d="M 120,120 C 150,130 170,110 160,80 C 150,50 110,70 120,100" {...strokeProps} />
    <path d="M 90,130 C 70,160 40,180 60,190 C 80,200 90,170 100,150" {...strokeProps} />
    <path d="M 110,130 C 130,160 160,180 140,190 C 120,200 110,170 100,150" {...strokeProps} />
  </svg>
);

// Focus Area Markers (Custom thin-line SVG)
export const FocusIcon = ({ type }) => {
  switch (type) {
    case 'analytics': // Chart/Tableau
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" {...strokeProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="17" x2="9" y2="10" />
          <line x1="15" y1="17" x2="15" y2="7" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      );
    case 'ai': // Neural Node
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" {...strokeProps}>
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="12" r="2.5" />
          <circle cx="19" cy="12" r="2.5" />
          <circle cx="12" cy="19" r="2.5" />
          <line x1="12" y1="7.5" x2="5" y2="12" />
          <line x1="12" y1="7.5" x2="19" y2="12" />
          <line x1="5" y1="12" x2="12" y2="19" />
          <line x1="19" y1="12" x2="12" y2="19" />
          <line x1="12" y1="7.5" x2="12" y2="16.5" />
        </svg>
      );
    case 'writing': // Quill / Pencil
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" {...strokeProps}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case 'design': // Vector/Layout pen
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" {...strokeProps}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="8" />
          <line x1="12" y1="16" x2="12" y2="22" />
          <line x1="2" y1="12" x2="8" y2="12" />
          <line x1="16" y1="12" x2="22" y2="12" />
        </svg>
      );
    default: // Custom continuous-line spiral / tentacle sucker
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" {...strokeProps}>
          <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10Q22 6 16 6t-8 5q0 3 3 3t3-2" />
        </svg>
      );
  }
};

// Social Icons - Thin line-art style
export const SocialIcon = ({ type, className = "social-icon" }) => {
  switch (type) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...strokeProps}>
          <rect x="2" y="2" width="20" height="20" rx="3" />
          <line x1="8" y1="11" x2="8" y2="17" />
          <line x1="8" y1="7" x2="8" y2="7.01" strokeWidth="2" />
          <path d="M12 11v6" />
          <path d="M12 11c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5v6" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...strokeProps}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case 'tableau':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...strokeProps}>
          {/* Custom minimal Tableau star-cross */}
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
          <circle cx="12" cy="12" r="3" fill="#ffffff" stroke="#16324f" strokeWidth="1.5" />
        </svg>
      );
    case 'substack':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...strokeProps}>
          <polygon points="4,4 20,4 20,7 4,7" />
          <polygon points="4,10 20,10 20,13 4,13" />
          <polygon points="4,16 20,16 12,20" />
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...strokeProps}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      );
    default:
      return null;
  }
};
