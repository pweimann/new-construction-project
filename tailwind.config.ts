import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#382f73',
        'black-light': '#00010f',
        'purple-light': '#8083bf',
        grey: '#a6a6a6',
        'black-dark': '#0d0d0d',

        'dark-rosa': '#693A44',
        'medium-rosa': '#A85D6D',
        'rosa': '#E88197',
        'light-rosa': '#a5888b'
      }
    }
  }
}
