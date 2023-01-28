import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
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
