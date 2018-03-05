import { resolve } from 'path'

module.exports = {
  head: {
    title: 'nuxt-koa-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
  },
  css: ['~assets/css/reset.css', '~assets/css/main.css'],
  router: { linkActiveClass: 'is-active' },
  loading: { color: '#3B8070' },
  modules: ['@nuxtjs/axios', 'nuxt-sass-resources-loader'],
  // sass imports globally
  sassResources: [ resolve(__dirname, 'assets/sass/**/*.sass') ],
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? `https://rchyve.herokuapp.com/` : `http://localhost:3000`
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
