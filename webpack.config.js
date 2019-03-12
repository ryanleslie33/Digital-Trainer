const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // loader: 'url-loader',
  // headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': '*',
  //   },

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    loaders: [
      {test:\/.(png|jpg)$/, loader: 'url-loader?limit=8192')}
    ]
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
          }
        },
        {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel",
            "styled-jsx/babel"
          ]
        }
      },
      {
        test: /\.(jpg|png|gif|jp(e*)g|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]',
            publicPath:'/'
          }
        }
      }
    ]
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template:'template.ejs',
      appMountId: 'react-app-root',
      title: 'React Help Queue',
      filename: resolve(__dirname, "build", "index.html"),
    }),
  ]
};
