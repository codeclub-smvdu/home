import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        foreground: '#1A1A1A',
        primary: '#3B82F6',
        'primary-dark': '#2563EB',
        'primary-light': '#DBEAFE',
        highlight: '#DC2626',
        'highlight-dark': '#B91C1C',
        'highlight-light': '#FEF2F2',
        muted: '#6B7280',
        border: '#E5E7EB',
        surface: '#FFFFFF',
        'surface-dim': '#F4F3EF',
        'neutral-dark': '#121417',
        'neutral-muted': '#64748B',
        'border-subtle': '#E5E3DC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section-title': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '700' }],
        'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
        'container': 'clamp(1rem, 5vw, 4rem)',
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        'full': '0.75rem',
      },
    },
  },
  plugins: [],
}
export default config