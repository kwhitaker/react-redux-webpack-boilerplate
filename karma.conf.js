var webpackConfig = require(__dirname + '/webpack.config');

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
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
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        {
          type: 'html',
          dir: './coverage'
        },
        {type: 'text-summary'}
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
