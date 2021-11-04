  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: 'media', // or 'media' or 'class'
     theme: {
       extend: {
         gridTemplateColumns: {
          'xl': '20% 80%', 
          'large': '20% 80%',
           'medium': '30% 80%',
           'half': '50% 50%',
           'third': '30% 70%'
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }