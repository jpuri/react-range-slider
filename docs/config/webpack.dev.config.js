var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: './js/index',
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        exclude: /normalize\.css$|codemirror\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'),
      },
      {
        test: /normalize\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /codemirror\.css$/,
        loader: "style-loader!css-loader"
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html',
      inject: true
    })
  ],
  postcss: function () {
    return [autoprefixer, precss];
  },
  resolve: {
    alias: {
      'react-sliders': path.join(__dirname, '../..', 'js'),
    },
    extensions: ['', '.js', '.json']
  }
};
