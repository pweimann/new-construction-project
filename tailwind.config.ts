import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif']
    },
    extend: {
      colors: {
        'dark-rosa': '#693A44',
        'medium-rosa': '#A85D6D',
        'rosa': '#E88197',
        'light-rosa': '#FFC2D1'
      }
    }
  }
}
