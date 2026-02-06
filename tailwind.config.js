/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFBF4', // Floral White
        surface: '#D8CFBC', // Bone
        primary: {
          light: '#565449', // Olive Drab
          DEFAULT: '#11120D', // Smoky Black
          dark: '#000000',
        },
        accent: {
          rose: '#D8CFBC', // Bone
          stone: '#565449', // Olive Drab
          olive: '#565449', // Olive Drab
          parchment: '#D8CFBC', // Bone
        },
        // Palette names for direct use
        'floral-white': '#FFFBF4',
        'bone': '#D8CFBC',
        'olive-drab': '#565449',
        'smoky-black': '#11120D',

        // Theme overrides
        'hero-heading': '#11120D', // Smoky Black
        'nav-muted': '#565449', // Olive Drab
        'cta-light': '#D8CFBC', // Bone
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'grain': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      }
    },
  },
  plugins: [],
}
