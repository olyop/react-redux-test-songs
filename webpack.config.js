const { ProgressPlugin } = require("webpack")
const { noop } = require("lodash")
const path = require("path")

const MinifyPlugin = require('babel-minify-webpack-plugin')
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const WriteFilePlugin = require("write-file-webpack-plugin")

module.exports = ({ mode }) => ({
  mode,
  entry: path.resolve("src", "client", "index.js"),
  output: {
    path: path.resolve("src", "server", "build"),
    filename: "[hash].js"
  },
  devServer: {
    contentBase: path.resolve("public"),
    compress: true,
    host: "127.0.0.1",
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(|jpg|png|ico|txt|json)$/,
        exclude: /node_modules/,
        loader: "file-loader"
      },
      {
        test: /\.html/,
        exclude: /node_modules/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "css-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react", "@babel/env"]
          }
        }
      }
    ]
  },
  plugins: [
    new ProgressPlugin(),
    mode === "production" ? new MinifyPlugin({}, { comments: false }) : noop,
    mode === "production" ? new OptimizeCssAssetsPlugin() : noop,
    new MiniCssExtractPlugin({ filename: "[hash].css" }),
    new HtmlWebpackPlugin({
      template: path.resolve("public", "index.html"),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new CopyPlugin([{
      from: path.resolve("public"),
      to: path.resolve("src", "server", "build")
    }]),
    new WriteFilePlugin(),
    new CleanWebpackPlugin()
  ]
})
