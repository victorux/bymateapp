/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    colors: {
      primary: {
        50: '#CCDEFF',
        75: '#A0C1FF',
        100: '#6A9DFF',
        200: '#3278FF',
        300: '#1463FE',
        400: '#0D53DB',
        500: '#00369E',
      },
      secondary: {
        50: '#EBF9F6',
        75: '#ACE8DA',
        100: '#8ADFCA',
        200: '#8ADFCA',
        300: '#35C7A4',
        400: '#258B73',
        500: '#207964',
      },
      neutral: {
        50: '#FCFCFC',
        75: '#F1F2F4',
        100: '#ECECEF',
        200: '#E4E4E8',
        300: '#DEDFE3',
        400: '#9B9C9F',
        500: '#87888A',
      },
      black: '#181B2A',
      white: '#FFFFFF',
    },
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2520px',
      },
    },
  },
  plugins: [],
}
