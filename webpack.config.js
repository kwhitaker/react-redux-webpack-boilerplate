var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var nodeDir = path.resolve(__dirname, 'node_modules');
var port = 8080;
var env = process.env.NODE_ENV;
var templateFile = 'template';

var config  = {
  port: port,
  devTool: 'eval',
  eslint: {
    configFile: './.eslintrc'
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:' + port,
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'src/index.js')
    ],
    vendors: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    hash: true,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Gadfly',
      template: 'src/' + templateFile + '.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin({title: 'Webpack'}),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
      brainspaceHost: JSON.stringify(process.env.HOST || 'http://pdlsdev01:8080')
    })
  ],
  module: {
    preLoaders: [
      {test: /\.(js|jsx)?$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') }
    ]
  },

  postcss: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple')
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;
