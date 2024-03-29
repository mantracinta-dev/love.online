import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - epicday-udangan-online",
    title: process.env.TITLE,
    htmlAttrs: {
      lang: "id",
    },
    meta: [
      { charset: "utf-8" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5' },
      { hid: 'description', name: 'description', content: process.env.DESCRIPTION },
      { name: "format-detection", content: "telephone=no" },
      { name: 'theme-color', content: '#f90000', media: '(prefers-color-scheme: light)' },
      { name: 'theme-color', content: '#2ca1c7', media: '(prefers-color-scheme: dark)' }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/love.css", "vuesax/dist/vuesax.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/vuesax"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: "Libre Bodoni",
      },
    },
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
