const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
   configureWebpack: {
      plugins: [
         new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
         })
      ]
   },
   css: {
      loaderOptions: {
         sass: {
            additionalData: `@import "@/assets/css/style.scss";`
         }
      }
   },
   publicPath: '/TestHosting/'
})

