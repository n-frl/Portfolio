/** @type {import('tailwindcss').Config} */

/**
 * Les couleurs sont declarees en variables CSS (voir src/index.css) au format
 * "R G B" sans virgule. Ce helper permet a Tailwind de continuer a gerer
 * l'opacite (ex: bg-surface/60) tout en lisant la variable.
 */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class', // bascule pilotee par la classe .dark sur <html>
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'), // fond de page
        surface: token('surface'), // fond des cartes
        'surface-2': token('surface-2'), // fond secondaire (pills, bandeaux)
        line: token('line'), // bordures et filets
        'line-strong': token('line-strong'),
        ink: token('ink'), // texte principal
        'ink-muted': token('ink-muted'), // texte secondaire
        'ink-faint': token('ink-faint'), // annotations, dates
        accent: token('accent'), // accent LISIBLE (texte, liens) - AA garanti
        'accent-strong': token('accent-strong'),
        'accent-line': token('accent-line'), // #00FFFF : traits et graphismes uniquement
        'accent-wash': token('accent-wash'), // aplat tres clair pour les fonds
      },
      fontFamily: {
        // Display : Space Grotesk - grotesque technique, utilise avec parcimonie
        display: ['"Space Grotesk Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Corps : Inter - neutre, excellente lisibilite a petite taille
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Utilitaire : mono pour les dates, reperes et annotations de plan
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Echelle typographique explicite (taille / interligne / interlettrage)
        eyebrow: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.14em' }],
        meta: ['0.75rem', { lineHeight: '1.1rem', letterSpacing: '0.04em' }],
      },
      maxWidth: {
        content: '68rem',
      },
      borderRadius: {
        card: '0.625rem',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(15 23 32 / 0.04), 0 1px 3px 0 rgb(15 23 32 / 0.06)',
        'card-hover': '0 2px 4px 0 rgb(15 23 32 / 0.05), 0 8px 20px -6px rgb(15 23 32 / 0.10)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-in': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'draw-in': 'draw-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
