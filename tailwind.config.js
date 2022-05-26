module.exports = {
  content: ["./app/**/*.{ts,tsx}"], 
  theme: {
    extend: {
      boxShadow: {
        'md': '0 13px 28px #1B1B1C'
      },
      colors: {
        primary: '#0092E4',
        secondary: '#FF4557',
        lighter: '#FFFFFF',
        lighten: '#F3F4F6',
        darker: '#29292B',
        darken: '#202021'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// secondary: #0092E4
// orange: #EA4C3C
// red: #FF4557

// darker: #29292B
// darken: #202021

// fireship bg: #12181B
// firshit sc: #2A2E35