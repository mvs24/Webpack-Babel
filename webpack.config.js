const path = require("path");

const config = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
    //   {
    //     use: "babel-loader",
    //     test: /\.js$/
    //   }
      
    {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
    }
      
    ]
  }
};


module.exports = config;
