/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        manipuri: {
          crimson: '#7A0016',
          ruby: '#99001C',
          brightCrimson: '#C41E3A',
          gold: '#D4AF37',
          lightGold: '#F3C623',
          warmGold: '#E5A93C',
          darkGold: '#997A15',
          slateDark: '#0A0E17',
          cardDark: '#121826',
          panelDark: '#1A2234',
          borderGold: 'rgba(212, 175, 55, 0.25)',
          textMuted: '#94A3B8',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
        meitei: ['"Noto Sans Meetei Mayek"', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #0A0E17 0%, #1A0C16 50%, #0A0E17 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F3C623 0%, #D4AF37 50%, #997A15 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #99001C 0%, #660012 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(26, 34, 52, 0.8) 0%, rgba(18, 24, 38, 0.9) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'crimson-glow': '0 0 25px rgba(153, 0, 28, 0.4)',
      }
    },
  },
  plugins: [],
}
