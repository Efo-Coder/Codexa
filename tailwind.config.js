/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui'],
        display: ['"Space Grotesk"', '"IBM Plex Sans"', 'ui-sans-serif', 'system-ui'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Custom module colors
        module: {
          1: {
            light: '#3b82f6',
            dark: '#2987f8',
          },
          2: {
            light: '#10b981',
            dark: '#059669',
          },
          3: {
            light: '#f59e0b',
            dark: '#d97706',
          },
          4: {
            light: '#ef4444',
            dark: '#dc2626',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'bg-drift': 'bgDrift 0s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bgDrift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '80px 80px' },
        },
      },
    },
  },
  plugins: [],
}
