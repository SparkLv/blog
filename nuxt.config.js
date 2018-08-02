module.exports = {
  css: [{ src: "~assets/common/styles/index.scss", lang: "scss" }],
  plugins: [
    { src: "~plugins", ssr: true },
    //google analysics
    { src: "~plugins/ga.js", ssr: false }
  ],
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }
};
