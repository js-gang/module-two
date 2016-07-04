var path = require('path')
var appPath = path.join(__dirname, 'src')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  context: appPath,
  entry: {
    bundle: 'app.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
  },
  debug: true,
  devtool: 'cheap-module-inline-source-map',
  output: {
    path: './src/bin',
    filename: 'app.bundle.js'
  },
  resolve: {
    root: appPath,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: appPath,
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(woff|eot|ttf|svg|png|jpg)$/,
        loader: 'file',
        query: {
          name: '[path][name].[ext]?[hash]',
          context: appPath,
        }
      }
    ],

  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(appPath, 'index.html'),
      minify: false,
    }),
  ]
};
