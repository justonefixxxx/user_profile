module.exports = {
  context: __dirname + 'app/',
  entry: {},
  output: {},
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}