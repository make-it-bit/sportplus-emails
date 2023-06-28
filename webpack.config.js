const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
//const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: './src/styles.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
    }),
    //new HtmlInlineCssWebpackPlugin(),
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    /* miks hosti vaja? webpack ametlikul lehel ka polnud seda näidetes! */
    compress: true,
    port: 8080,
  },

  devtool: 'inline-source-map',
};
