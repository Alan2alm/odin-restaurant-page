// webpack.config.js
const path = require("path");
// path for the html package
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Package config
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
// plugin to integrate html files
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
 // rules to integrate images
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }      
    ],
  },
};
