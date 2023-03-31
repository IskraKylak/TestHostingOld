const webpack = require('webpack');

module.exports = {
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
   publicPath: '/testhosting/'
}