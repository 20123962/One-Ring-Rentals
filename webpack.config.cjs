const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { homepage } = require("./package.json");
const CopyPlugin = require("copy-webpack-plugin");

const homepagePath = homepage ? new URL(homepage).pathname : "/";

module.exports = (_, argv = {}) => {
  const isProd = argv.mode === "production";
  const publicUrl = process.env.PUBLIC_URL ?? (isProd ? homepagePath : "/");

  return {
    entry: { // added entries for pages
      index: "./src/index.js",
      contact: "./src/contact.js",
      regions: "./src/regions.js",
      news: "./src/news.js",
      default: "./src/default.js",
    },
    output: {
      filename: "[name].[contenthash].js", // better caching
      path: path.resolve(__dirname, "dist"),
      clean: true, // clean dist on build
      publicPath: publicUrl, // critical for GH Pages
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
// generates the HTML pages using the specified templates and filenames, and ensures the intended JavaScript bundle is loaded for each page
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        chunks: ["index"],
      }),

      new HtmlWebpackPlugin({
        template: "./public/contact.html",
        filename: "contact.html",
        chunks: ["contact"],
      }),

      new HtmlWebpackPlugin({
        template: "./public/regions.html",
        filename: "regions.html",
        chunks: ["regions"],
      }),

      new HtmlWebpackPlugin({
        template: "./public/news.html",
        filename: "news.html",
        chunks: ["news"],
      }),

        new HtmlWebpackPlugin({
        template: "./public/default.html",
        filename: "default.html",
        chunks: ["default"],
      }),
        new CopyPlugin({
        patterns: [
        { from: "public/css", to: "css" },
        { from: "public/js", to: "js" },
  ],
}),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,


    },
  };
};

// Then run this
// npm install --save-dev style-loader css-loader
// npm run build
// npm start
// Check build folder
