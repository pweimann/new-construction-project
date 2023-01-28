import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
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
