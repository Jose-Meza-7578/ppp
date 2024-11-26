/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty:{
        'width': 'width'
      },
      transitionDuration:{
        '500': '500ms'
      },
      transitionTimingFunction:{
        'ease': 'ease'
      }
    },
  },
  plugins: [],
};
