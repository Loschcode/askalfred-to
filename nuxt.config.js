const path = require("path");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "AskAlfred",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "AskAlfred", content: "Are you tired of losing time? Give it to Alfred." }
    ],
    link: [{ rel: "icon", type: "image/ico", href: "/favicon.png" }]
  },

  modules: [
    "@nuxtjs/redirect-module",
    "@nuxtjs/style-resources",
    ["nuxt-validate", { lang: "en" }]
  ],

  plugins: [
    { src: "@plugins/vue2-smooth-scroll", ssr: false },
    { src: "@plugins/firebase", ssr: false }
  ],

  redirect: [
    // { from: '^/$', to: '/url' }
  ],
  /**
   * CSS loads
   */
  styleResources: {
    scss: ["@assets/styles/helpers.scss"]
  },

  css: [
    {
      src: "@assets/styles/app.scss",
      lang: "scss"
    }
  ],

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#4979d5",
    duration: 1000
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ["vue2-smooth-scroll"],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.resolve.alias["@"] = path.resolve("./");
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
