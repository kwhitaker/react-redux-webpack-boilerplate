var webpackConfig = require(__dirname + '/webpack.config');

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    webpack: {
      resolve: webpackConfig.resolve,
      module: webpackConfig.module,
      devtool: 'inline-source-map'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['nyan'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['jsdom'],
    singleRun: true,
    nyanReporter: {
      // suppress the error report at the end of the test run
      suppressErrorReport: false,

      // suppress the red background on errors in the error
      // report at the end of the test run
      suppressErrorHighlighting: true
    }
  });
};
