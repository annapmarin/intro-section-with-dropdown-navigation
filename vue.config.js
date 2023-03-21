const { defineConfig } = require('@vue/cli-service')
module.exports = 
{
  publicPath: process.env.NODE_ENV === 'production'
    ? '/intro-section-with-dropdown-navigation/' //nombre de tu proyecto GitHub
    : '/'
}
defineConfig({
  transpileDependencies: true
}),
{
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
}
