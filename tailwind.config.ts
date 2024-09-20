import type { Config } from 'tailwindcss'
import flowbite from 'flowbite-react/tailwind'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', flowbite.content()],
  darkMode: 'class',
  theme: {
    extend: {
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
  plugins: [flowbite.plugin()]
}
export default config
