export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'galxe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    bodyAttrs: { style: 'height: 100%; margin:0; padding: 0;' },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://unpkg.com/@esotericsoftware/spine-player@4.0.*/dist/spine-player.css' }
    ],
    script: [
      {src: 'https://unpkg.com/@esotericsoftware/spine-player@4.0.*/dist/iife/spine-player.js'}
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  target: 'static',
  ssr:false,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    // {
    //   src: '@/plugins/pixi.js',
    //   ssr: false
    // }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['pixi.js', 'pixi-spine','@pixi'],
    loaders: {
      less: {
        javascriptEnabled: true
      }
    },
    transpile: [
      /^element-ui/,
      '@esotericsoftware/spine-core',
      '@esotericsoftware/spine-player',
      '@esotericsoftware/spine-webgl',
      'pixi.js',
      '@pixi',
      'pixi-spine',
    ],
  },
}
