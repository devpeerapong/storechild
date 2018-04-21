const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/js/app.js',
  output: {
    filename: './js/app.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: ['style-loader'],
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      }
    ]
  },

  plugins: [new ExtractTextPlugin('./css/app.min.css')]
}
