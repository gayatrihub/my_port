// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
         'ping-slow': 'ping 6s cubic-bezier(0, 0, 0.2, 1) infinite',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
