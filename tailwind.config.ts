import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      colors: {
        'dark-rosa': '#693A44',
        'medium-rosa': '#A85D6D',
        'rosa': '#E88197',
        'light-rosa': '#a5888b'
      }
    }
  }
}
