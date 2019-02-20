const path = require("path");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "laurent-tech",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/ico", href: "/favicon.png" }]
  },

  modules: ["@nuxtjs/redirect-module", "@nuxtjs/style-resources"],

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
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
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
