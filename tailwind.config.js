/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(#FFFFFF 100%, #FFFFFF 0%)',
        },
        scaling: {
          '0%, 50%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
    screens: {

      'xs': '576px',
      // => @media (min-width: 576px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'slg': '880px',
      // => @media (min-width: 880px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1x1': '1350px',
      // => @media (min-width: 1350px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
