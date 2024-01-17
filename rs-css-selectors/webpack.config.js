const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const EslintPlugin = require("eslint-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
console.log("⬇️ DEV:", isDev);

module.exports = {
  mode: isDev ? "development" : "production",
  entry: path.resolve(__dirname, "./src/index"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["src/*"],
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    compress: true,
    hot: true,
    port: 4040,
    open: {
      app: {
        name: "Google Chrome",
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new EslintPlugin({ extensions: "ts" }),
  ],
};
