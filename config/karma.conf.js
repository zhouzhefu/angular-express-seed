module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      'public/js/lib/angular-1.2.0-rc.3/angular.js',
      'public/js/lib/angular-1.2.0-rc.3/angular-*.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-bootstrap.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-bootstrap-prettify.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-cookies.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-loader.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-resource.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-sanitize.js',
//
//        'public/js/lib/angular-1.2.0-rc.3/angular-animate.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-route.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-touch.js',

      'test/lib/angular-1.2.0-rc.3/angular-mocks.js',
      'public/js/*.js',
      'test/unit/**/*.js'
    ],

    exclude: [
        'public/js/lib/angular-1.2.0-rc.3/angular-loader*.js', //workaround, need stable version fix it
        'public/js/lib/angular-1.2.0-rc.3/docs/**/*.js'
//        'public/js/lib/angular-1.2.0-rc.3/angular.min.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-bootstrap.min.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-bootstrap-prettify.min.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-cookies.min.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-loader.min.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-resource.min.js',
//        'public/js/lib/angular-1.2.0-rc.3/angular-sanitize.min.js'
    ],

    frameworks: ['jasmine'],

    autoWatch: true,

    browsers: ['Chrome'],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
