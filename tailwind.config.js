/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
         'corse-details-heading-small' : ['26px','36px'],
         'corse-details-heading-large' : ['36px','44px'],
         'home-heading-small' : ['28px','34px'],
          'home-heading-large' : ['28px','34px'],
           'default' : ['15px','21px']
        }
    },
  },
  plugins: [],
}