module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-goyang': 'goyang 1s ease-in-out infinite',
      },
      keyframes: {
        goyang: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%' : {
            transform: 'rotate(3deg)'
          }
        }
      }
    },
  },
  plugins: [],
}