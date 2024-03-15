const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.jsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
  },
  mode: 'development',
  module: {
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: 'babel-loader', // Use babel-loader for JavaScript files
      },
      {
        test: /\.scss$/, // Match CSS files
        use: ['style-loader', 'css-loader', 'scss-loader'], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        type: 'asset/resource', // Use asset/resource for handling images
        generator: {
          filename: 'images/[name][ext]', // Output directory for images
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // HTML template
    }),
  ],
};
