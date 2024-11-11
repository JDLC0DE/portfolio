import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          A100: '#b2b2b2',
          A200: '#2a2a2a'
        }
      },
      animation: {
        'infinite-scroll': 'loop 10s linear infinite'
      },
      keyframes: {
        loop: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      backgroundImage: {
        'pastel-sky': 'linear-gradient(135deg, #60a5fa 0%, #4ade80 100%)'
      }
    }
  },
  plugins: [nextui()]
}
export default config
