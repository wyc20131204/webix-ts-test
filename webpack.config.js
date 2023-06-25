// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
  //watch: true,

  devServer: {
    // stats:"errors-only",
    // open: true,
    port: 8081
  },
  devtool: 'inline-source-map',

entry: "./src/SysApp.ts",
// entry: "./src/folder.ts",
//entry:"./src/system/SysApp.ts",

  // entry: {
  //   indexImport: {
  //     import: './src/index.ts', 
  //   }, 
  // },

  output: {
    path: path.resolve(__dirname, "dist"),
    // 打包的文件名
    filename:'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),

    new webpack.ProvidePlugin({
      webix: "@xbs/webix-pro"
    })

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    modules: ["./src", "node_modules"]
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
