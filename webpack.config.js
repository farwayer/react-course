const HtmlWebpackPlugin = require('html-webpack-plugin')


const Babel = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ],
  },
}

module.exports = {
  module: {
    rules: [Babel],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
}
