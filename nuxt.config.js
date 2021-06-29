export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0", // default: localhost,
    timing: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Max Caplan | Portfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png?v=1"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png?v=1"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png?v=1"
      },
      { rel: "manifest", href: "/site.webmanifest?v=1" },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg?v=1",
        color: "#3772ff"
      },
      { rel: "shortcut icon", href: "/favicon.ico?v=1" }
      // {
      //   href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      //   rel: "stylesheet"
      // },

      // { rel: "preconnect", href: "https://fonts.googleapis.com" },
      // {
      //   rel: "preconnect",
      //   href: "https://fonts.gstatic.com",
      //   crossorigin: true
      // },
      // {
      //   href:
      //     "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
      //   rel: "stylesheet"
      // }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/css/main.scss", "./assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vue-touch-events", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
