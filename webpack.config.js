const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      features: path.resolve(__dirname, 'src/features/'),
      Constants: path.resolve(__dirname, 'src/Constants/'),
      images: path.resolve(__dirname, 'src/images/'),
      common: path.resolve(__dirname, 'src/features/common'),
      store: path.resolve(__dirname, 'src/store'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      helpers: path.resolve(__dirname, 'src/helpers/'),
      customPropTypes: path.resolve(__dirname, 'src/customPropTypes'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      // favicon: path.resolve(__dirname, 'src/images/favicon.ico'),
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    open: true,
    hot: true,
  },
  performance: { hints: false },
};
