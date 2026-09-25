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
        accent: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
          light: '#DBEAFE',
        },
        highlight: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#FEF2F2',
        },
        muted: '#6B7280',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
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
    },
  },
  plugins: [],
}
export default config