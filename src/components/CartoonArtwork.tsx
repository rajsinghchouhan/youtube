import React from 'react';
import type { CartoonVideo } from '../utils/bundleLogic';

interface CartoonArtworkProps {
  variant: CartoonVideo['artVariant'];
  isPlaying?: boolean;
  className?: string;
}

export const CartoonArtwork: React.FC<CartoonArtworkProps> = ({
  variant,
  isPlaying = false,
  className = 'w-full h-full',
}) => {
  switch (variant) {
    case 'banyan':
      return (
        <svg
          viewBox="0 0 640 360"
          className={`${className} select-none`}
          role="img"
          aria-label="Magical Banyan Tree Hindi Cartoon Scene"
        >
          <defs>
            <linearGradient id="skyBanyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="55%" stopColor="#7c2d12" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="0.75" cy="0.35" r="0.35">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id=" canopyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#052e16" />
            </linearGradient>
          </defs>
          <rect width="640" height="360" fill="url(#skyBanyan)" />
          <circle cx="480" cy="126" r="130" fill="url(#sunGlow)" />
          <circle cx="480" cy="126" r="38" fill="#fef08a" opacity="0.9" />
          {/* Distant hills */}
          <path d="M0 280 Q160 220 340 275 T640 255 L640 360 L0 360 Z" fill="#431407" opacity="0.7" />
          <path d="M0 300 Q220 265 450 295 T640 285 L640 360 L0 360 Z" fill="#14532d" />
          {/* Ancient Banyan Tree Trunk & Roots */}
          <path
            d="M170 295 C195 245, 200 180, 190 130 L250 130 C240 185, 250 245, 285 295 Z"
            fill="#5c2d16"
          />
          <path d="M150 140 L145 285 M270 145 L278 290 M175 150 L170 290" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          {/* Lush Canopy */}
          <ellipse cx="220" cy="105" rx="155" ry="72" fill="#14532d" />
          <ellipse cx="165" cy="115" rx="95" ry="52" fill="#166534" />
          <ellipse cx="280" cy="112" rx="105" ry="56" fill="#15803d" />
          {/* Magical Golden Sparkles & Glowing Axe */}
          <g className={isPlaying ? 'animate-bounce' : ''}>
            <circle cx="385" cy="215" r="28" fill="#fef08a" opacity="0.28" />
            <path d="M375 235 L395 195" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
            <path d="M388 192 Q415 198 406 218 Q392 212 388 192 Z" fill="#facc15" stroke="#fef08a" strokeWidth="2" />
          </g>
          {/* Woodcutter Character Silhouette */}
          <g transform="translate(310, 208)">
            <circle cx="24" cy="18" r="14" fill="#fed7aa" />
            <path d="M10 14 Q24 2 38 14 Z" fill="#f97316" />
            <rect x="14" y="32" width="20" height="38" rx="8" fill="#ea580c" />
            <rect x="14" y="66" width="8" height="24" rx="3" fill="#fde68a" />
            <rect x="26" y="66" width="8" height="24" rx="3" fill="#fde68a" />
          </g>
          {/* Fireflies */}
          <circle cx="130" cy="190" r="3.5" fill="#fef08a" />
          <circle cx="255" cy="175" r="4" fill="#fef08a" />
          <circle cx="435" cy="165" r="3" fill="#fef08a" />
          <circle cx="520" cy="210" r="4" fill="#fef08a" />
        </svg>
      );

    case 'lion_rabbit':
      return (
        <svg
          viewBox="0 0 640 360"
          className={`${className} select-none`}
          role="img"
          aria-label="Panchatantra Clever Rabbit and Lion Scene"
        >
          <defs>
            <linearGradient id="jungleBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="55%" stopColor="#065f46" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
          </defs>
          <rect width="640" height="360" fill="url(#jungleBg)" />
          {/* Sunlight rays */}
          <polygon points="80,0 180,0 320,360 180,360" fill="#fef08a" opacity="0.1" />
          <polygon points="280,0 390,0 540,360 410,360" fill="#fef08a" opacity="0.08" />
          {/* Jungle foliage background */}
          <circle cx="90" cy="90" r="110" fill="#047857" opacity="0.6" />
          <circle cx="560" cy="80" r="120" fill="#047857" opacity="0.6" />
          {/* Meadow ground */}
          <path d="M0 255 Q320 230 640 265 L640 360 L0 360 Z" fill="#15803d" />
          {/* Stone Well in Center */}
          <ellipse cx="320" cy="275" rx="78" ry="24" fill="#57534e" />
          <rect x="242" y="230" width="156" height="46" fill="#78716c" />
          <ellipse cx="320" cy="230" rx="78" ry="24" fill="#44403c" stroke="#a8a29e" strokeWidth="6" />
          <ellipse cx="320" cy="232" rx="64" ry="17" fill="#0284c7" />
          {/* Lion character on left */}
          <g transform="translate(115, 145)" className={isPlaying ? 'animate-pulse' : ''}>
            <circle cx="55" cy="52" r="44" fill="#b45309" />
            <circle cx="55" cy="52" r="31" fill="#f59e0b" />
            <circle cx="44" cy="46" r="4.5" fill="#1c1917" />
            <circle cx="66" cy="46" r="4.5" fill="#1c1917" />
            <polygon points="55,54 49,62 61,62" fill="#78350f" />
            <rect x="32" y="88" width="46" height="48" rx="16" fill="#d97706" />
          </g>
          {/* Clever Rabbit on right */}
          <g transform="translate(445, 180)">
            <ellipse cx="26" cy="14" rx="6" ry="18" fill="#f8fafc" stroke="#fda4af" strokeWidth="2" />
            <ellipse cx="42" cy="14" rx="6" ry="18" fill="#f8fafc" stroke="#fda4af" strokeWidth="2" />
            <circle cx="34" cy="36" r="18" fill="#f8fafc" />
            <circle cx="28" cy="33" r="3" fill="#0f172a" />
            <circle cx="40" cy="33" r="3" fill="#0f172a" />
            <ellipse cx="34" cy="64" rx="18" ry="22" fill="#e2e8f0" />
          </g>
        </svg>
      );

    case 'village_fest':
      return (
        <svg
          viewBox="0 0 640 360"
          className={`${className} select-none`}
          role="img"
          aria-label="Magical Village Lantern Festival Hindi Cartoon"
        >
          <defs>
            <linearGradient id="festSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#311042" />
              <stop offset="100%" stopColor="#7c2d12" />
            </linearGradient>
          </defs>
          <rect width="640" height="360" fill="url(#festSky)" />
          {/* Glowing Floating Lanterns */}
          {[
            { x: 110, y: 78, r: 16 },
            { x: 240, y: 54, r: 13 },
            { x: 390, y: 68, r: 18 },
            { x: 520, y: 88, r: 15 },
            { x: 175, y: 128, r: 11 },
            { x: 460, y: 132, r: 12 },
          ].map((l, idx) => (
            <g key={idx}>
              <circle cx={l.x} cy={l.y} r={l.r * 2.1} fill="#f59e0b" opacity="0.22" />
              <rect
                x={l.x - l.r * 0.7}
                y={l.y - l.r}
                width={l.r * 1.4}
                height={l.r * 1.9}
                rx="6"
                fill="#fde047"
                stroke="#f97316"
                strokeWidth="2"
              />
            </g>
          ))}
          {/* Village Houses */}
          <path d="M40 270 L115 210 L190 270 L190 340 L40 340 Z" fill="#9a3412" />
          <path d="M35 270 L115 205 L195 270" stroke="#fde047" strokeWidth="4" fill="none" />
          <rect x="95" y="285" width="38" height="55" rx="6" fill="#fef08a" opacity="0.85" />
          <path d="M450 265 L530 205 L610 265 L610 340 L450 340 Z" fill="#7c2d12" />
          <rect x="512" y="285" width="36" height="55" rx="6" fill="#fef08a" opacity="0.85" />
          {/* Center Magical Lantern Hero */}
          <circle cx="320" cy="210" r="65" fill="#f59e0b" opacity="0.25" />
          <rect x="296" y="175" width="48" height="68" rx="12" fill="#fef08a" stroke="#ea580c" strokeWidth="4" />
          <path d="M0 325 Q320 305 640 325 L640 360 L0 360 Z" fill="#271206" />
        </svg>
      );

    case 'mountain_quest':
      return (
        <svg
          viewBox="0 0 640 360"
          className={`${className} select-none`}
          role="img"
          aria-label="Himalayan Adventure Kids Cartoon Scene"
        >
          <defs>
            <linearGradient id="himalayaSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
          </defs>
          <rect width="640" height="360" fill="url(#himalayaSky)" />
          {/* Snow-capped peaks */}
          <polygon points="40,320 190,85 340,320" fill="#334155" />
          <polygon points="190,85 145,155 190,140 235,155" fill="#f8fafc" />
          <polygon points="260,320 430,65 600,320" fill="#1e293b" />
          <polygon points="430,65 375,148 430,130 485,148" fill="#f8fafc" />
          {/* Glowing Waterfall */}
          <rect x="395" y="148" width="52" height="190" fill="#38bdf8" opacity="0.85" />
          <circle cx="421" cy="315" r="45" fill="#e0f2fe" opacity="0.6" />
          {/* Wooden Suspension Bridge */}
          <path d="M80 250 Q320 295 560 240" stroke="#78350f" strokeWidth="6" fill="none" />
          <path d="M80 220 Q320 265 560 210" stroke="#92400e" strokeWidth="3" fill="none" />
          {/* Young Explorer Silhouettes */}
          <circle cx="250" cy="222" r="13" fill="#fed7aa" />
          <rect x="240" y="235" width="20" height="30" rx="6" fill="#ef4444" />
          <circle cx="310" cy="228" r="12" fill="#fed7aa" />
          <rect x="301" y="240" width="18" height="28" rx="6" fill="#f59e0b" />
        </svg>
      );

    case 'royal_court':
      return (
        <svg
          viewBox="0 0 640 360"
          className={`${className} select-none`}
          role="img"
          aria-label="Akbar Birbal Royal Court Moral Story"
        >
          <defs>
            <linearGradient id="palaceBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="50%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
          <rect width="640" height="360" fill="url(#palaceBg)" />
          {/* Royal Mughal Arches */}
          {[110, 320, 530].map((cx, i) => (
            <path
              key={i}
              d={`M${cx - 85} 340 L${cx - 85} 150 Q${cx} 65 ${cx + 85} 150 L${cx + 85} 340 Z`}
              fill="#1c1917"
               opacity="0.45"
              stroke="#fbbf24"
              strokeWidth="3"
            />
          ))}
          {/* Hanging Khichdi Pot & Tiny Flame */}
          <line x1="320" y1="75" x2="320" y2="155" stroke="#d6d3d1" strokeWidth="3" />
          <ellipse cx="320" cy="168" rx="34" ry="22" fill="#d97706" stroke="#fef08a" strokeWidth="2" />
          <circle cx="320" cy="285" r="24" fill="#f59e0b" opacity="0.3" />
          <path d="M320 262 Q334 285 320 298 Q306 285 320 262 Z" fill="#fde047" />
          <rect x="0" y="320" width="640" height="40" fill="#292524" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 640 360"
          className={`${className} select-none`}
          role="img"
          aria-label="Hindi Cartoon Shorts Story Scene"
        >
          <defs>
            <linearGradient id="shortGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          <rect width="640" height="360" fill="url(#shortGrad)" />
          <circle cx="320" cy="175" r="95" fill="#fef08a" opacity="0.18" />
          {/* Cute Little Lion Cub */}
          <circle cx="290" cy="195" r="46" fill="#d97706" />
          <circle cx="290" cy="195" r="34" fill="#fbbf24" />
          <circle cx="278" cy="188" r="5" fill="#1e293b" />
          <circle cx="302" cy="188" r="5" fill="#1e293b" />
          <polygon points="290,196 283,204 297,204" fill="#78350f" />
          {/* Glowing Butterfly */}
          <g transform="translate(365, 125)">
            <ellipse cx="14" cy="16" rx="12" ry="16" fill="#38bdf8" opacity="0.9" />
            <ellipse cx="32" cy="16" rx="12" ry="16" fill="#f472b6" opacity="0.9" />
            <rect x="21" y="6" width="4" height="22" rx="2" fill="#fef08a" />
          </g>
          <path d="M0 295 Q320 265 640 295 L640 360 L0 360 Z" fill="#064e3b" />
        </svg>
      );
  }
};
