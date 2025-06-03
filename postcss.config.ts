
// postcss.config.ts

/*
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // Ensure it uses `tailwindcss` here instead of '@tailwindcss/postcss'
    autoprefixer: {},
  },
};*/



export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


/*
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}*/

/*
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
*/