/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ECE4DB', // Porcelain Blush
        surface: '#CFC8BE', // Warm Parchment
        primary: {
          light: '#C4A69B', // Rosewood Dust
          DEFAULT: '#2A2520', // Custom Deep Charcoal/Brown for text contrast
          dark: '#1A1816',
        },
        accent: {
          rose: '#C4A69B', // Rosewood Dust
          stone: '#B8AB9C', // Stone Linen
          olive: '#BAB8A2', // Olive Mist
          parchment: '#CFC8BE' // Warm Parchment
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'grain': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      }
    },
  },
  plugins: [],
}
