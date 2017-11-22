// Webpack tutorial https://habrahabr.ru/post/309306/

'use strict';

const path = require('path'),
  webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: {
    'index': 'index.js',
    'vendor': 'vendor.js'
  },

  output: {
    path: path.resolve('public/build'),
    filename: '[name].js',
    publicPath: '/build/',
    jsonpFunction: 'webpackJsonp_showcase'
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'public/js'),
      path.resolve(__dirname, 'public/css')
    ]
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false
            }
          },
        ]
      },

      {
        test: /\/fonts\/.*\.(woff2?|ttf|eot|svg)$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ 'name': 'vendor' })
  ]
};