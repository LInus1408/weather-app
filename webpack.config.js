const path = require('path'); // Use const instead of let for variables that do not change
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Use curly braces to import named exports
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'assets/scripts/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
    open: true,
    port: 8080,
  },

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/style.css',
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      proxy: 'http://localhost:8080/',
      reloadDelay: 500,
      injectChanges: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'assets/images',
        },
        {
          from: 'src/assets/favicon',
          to: 'assets/favicon',
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        exclude: [path.resolve(__dirname, 'src/assets/image')],
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
          outputPath: 'assets/fonts/',
          publicPath: '/assets/fonts/',
          emit: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: [path.resolve(__dirname, 'src/assets/fonts')],
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
          outputPath: 'assets/images/',
          publicPath: '/assets/images/',
          emit: true,
        },
      },
      {
        test: /\.js$/, // Регулярное выражение для поиска файлов с расширением .js
        exclude: /node_modules/, // Исключить папку node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
