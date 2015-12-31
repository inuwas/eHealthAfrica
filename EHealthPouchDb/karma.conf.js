// Karma configuration
// Generated on Thu Dec 03 2015 12:23:08 GMT+0100 (WAT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'scripts/bootstrap/dist/css/bootstrap.css', included: false},
      {pattern: 'scripts/bootstrap/dist/css/bootstrap-theme.css', included: false},
      {pattern: 'css/style.css', included: false},
      {pattern: 'css/*.css', included: false},
      {pattern: 'css/*.png', included: false},
      {pattern: 'angular-pouchdb.coffee', included: false},
      {pattern: 'scripts/angular/angular.js', included: false},
      {pattern: 'scripts/angular-mocks/*js', included: false},
      {pattern: 'scripts/angular-mocks/angular-mocks.js', included: false},
      {pattern: 'scripts/angular-pouchdb/*.js', included: false},
      {pattern: 'scripts/jquery/dist/jquery.js', included: false},
      {pattern: 'scripts/bootstrap/dist/js/bootstrap.js', included: false},
      {pattern: 'scripts/pouchdb/dist/pouchdb.js', included: false},
      'index.html',
      'app/*js',
      'test/*spec.js',
      'angular-pouchdb.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    //add dependencies
    dependencies:{
      "angular": "~1.4.7",
      "pouchdb": "~5.0.0"
    },
    devDependencies:{
      "angular-mocks": "~1.4.8"
    }

  })
}
