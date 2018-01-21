const path = require("path");

module.exports = {
  entry: ["./src/js/app.js"], //takes app.js file with react components
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js" //outputs compiled js file to dist/js folder
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" //entry js file transformed using babel-loader (JSX into JS)
        }
      }
    ]
  }
};