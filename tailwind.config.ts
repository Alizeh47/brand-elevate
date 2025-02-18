import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        letterform: ['Letterform', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        colorChange: {
          '0%': { color: '#ffffff' },
          '25%': { color: '#fdf4ff' },
          '50%': { color: '#f0abfc' },
          '75%': { color: '#e879f9' },
          '100%': { color: '#ffffff' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%', transform: 'skew(-12deg) scale(1)' },
          '50%': { backgroundPosition: '100% 50%', transform: 'skew(-12deg) scale(1.05)' },
          '100%': { backgroundPosition: '0% 50%', transform: 'skew(-12deg) scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(8px)' },
          '50%': { opacity: '1', filter: 'blur(12px)' },
        },
        shiftLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(0deg) scale(0)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        }
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'color-shift': 'colorChange 4s ease-in-out infinite',
        'gradient-shift': 'gradientMove 6s ease-in-out infinite',
        'glow': 'glowPulse 3s ease-in-out infinite',
        'shift-left': 'shiftLeft 20s linear infinite',
        'rotate-in': 'rotateIn 1.5s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
