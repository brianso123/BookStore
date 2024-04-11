const path = require("path");

const clientConfig = {
  target: "web",
  entry: "./client/index.tsx",
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/i,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".html"],
    modules: ["node_modules"],
  },
};

const serverConfig = {
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/i,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".html"],
    modules: ["node_modules"],
  },
};

module.exports = [clientConfig, serverConfig];
