const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // папка для выходных файлов
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development", // или 'production'
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8002,
  },
};
