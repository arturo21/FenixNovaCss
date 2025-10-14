const path = require('path');
const sourcePath = path.resolve(__dirname, 'src');
const destinationPath = path.resolve(__dirname, 'dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: sourcePath,
  entry: './fenixnova.entry.css',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ignore.js' // CSS no genera JS, pero Webpack requiere este campo
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'fenixnova.bundle.css'
    })
  ],
  mode: 'production'
};
