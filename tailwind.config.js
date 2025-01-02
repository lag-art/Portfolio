module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      color: {
        'primary': '#000000', // Black
        'secondary': '#999999', // Warm Gray
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

