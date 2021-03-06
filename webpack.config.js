var path = require('path')
var appPath = path.join(__dirname, 'src')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
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
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(gif|svg|png|jpg)$/,
        loader: 'file',
        query: {
          name: '[path][name].[ext]?[hash]'
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
