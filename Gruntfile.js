"use strict";

var buildPlugin = require('build-plugin/webpack');
var path = require('path');

module.exports = function(grunt) {
  buildPlugin(grunt, {
    webpack: {
      entry: {
        main: path.resolve(__dirname, 'app/scripts/index.js'),
        modern: path.resolve(__dirname, 'app/scripts/modern/index.js')
      },
      root: [path.resolve('vendor')],
      loaders: [{
        test: require.resolve('./vendor/fixedsticky'),
        loader: 'imports?jQuery=jquery'
      }]
    }
  });

  grunt.registerTask('ci', ['build', 'package']);
};
