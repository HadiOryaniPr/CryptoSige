module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "primary" : "#DB2763"
      },
      screens: {
        'sm2': {'min': '768px', 'max': '1056px'},
    },
    height: {
      '94': '23.3rem',
    }
    },
  },
  plugins: [],
}
