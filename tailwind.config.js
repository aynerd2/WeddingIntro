/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0a0a0a',
        'soft-white': '#fafafa',
        'charcoal': '#1a1a1a',
        'pearl': '#f5f5f5',
        'smoke': '#666666',
        // PURPLE COLORS ADDED ✨
        'royal-purple': '#6B21A8',
        'soft-purple': '#A855F7',
        'light-purple': '#E9D5FF',
        'purple-accent': '#9333EA',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'elegant': ['Cormorant Garamond', 'serif'],
        'sans': ['Raleway', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}











// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'deep-black': '#0a0a0a',
//         'soft-white': '#fafafa',
//         'charcoal': '#1a1a1a',
//         'pearl': '#f5f5f5',
//         'smoke': '#666666',
//       },
//       fontFamily: {
//         'display': ['Playfair Display', 'serif'],
//         'elegant': ['Cormorant Garamond', 'serif'],
//         'sans': ['Raleway', 'sans-serif'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 1s ease-in forwards',
//         'slide-up': 'slideUp 0.8s ease-out forwards',
//         'scale-in': 'scaleIn 0.6s ease-out forwards',
//         'float': 'float 6s ease-in-out infinite',
//         'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { opacity: '0', transform: 'translateY(30px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         scaleIn: {
//           '0%': { opacity: '0', transform: 'scale(0.9)' },
//           '100%': { opacity: '1', transform: 'scale(1)' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }
