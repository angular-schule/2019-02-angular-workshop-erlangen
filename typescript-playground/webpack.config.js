
// webpack.config.js
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./index.ts",
    output: { filename: "bundle.js" },
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: "ts-loader" }
      ]
    }
  };