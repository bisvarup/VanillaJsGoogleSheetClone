const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true
  },
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "js/app.bundle.js"
  },
  module: {
    rules: [
      { test: /\.css/, use: ["style-loader", "css-loader"] },
      { test: /\.scss/, use: ["style-loader", "css-loader", "sass-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        collapseWhitespace: false,
        collapseBooleanAttributes: true
      }
    }),
    new CopyWebpackPlugin([
      { from: "assets", to: "assets" },
      { from: "constants", to: "assets/constants" }
    ])
  ]
};
