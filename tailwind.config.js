// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
    6: '6deg',
  },
  perspective: {
    1000: '1000px',
  },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'ping-slow': 'ping 6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pingLong': 'ping 6s cubic-bezier(0, 0, 0.2, 1) infinite',
        tilt: 'tilt 10s infinite linear',
        float: 'float 5s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 3s ease-in-out infinite',
        'float-bounce': 'floatBounce 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
         'sparkle': 'sparkle 3s linear infinite',
      },
      keyframes: {
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(255,255,255,0.3)' },
          '50%': { textShadow: '0 0 20px rgba(255,255,255,0.7)' },
        },
      },
    },
  },
  plugins: [],
};
