"use strict";

var buildPlugin = require('build-plugin/webpack');
var path = require('path');

module.exports = function(grunt) {
  buildPlugin(grunt, {
    webpack: {
      entry: {
        main: path.resolve(__dirname, 'app/scripts/legacy/index.js'),
        modern: path.resolve(__dirname, 'app/scripts/modern/index.js')
      },
      root: [path.resolve('vendor')],
      loaders: [{
        test: require.resolve('./vendor/fixedsticky'),
        loader: 'imports?jQuery=jquery'
      }]
    }
  });

  grunt.config.set('copy', {
    dist: {
      files: [{
        expand: true,
        cwd: 'app',
        src: ['**/*.html', '**/*.css', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff'],
        dest: 'target/dist'
      }]
    }
  });

  grunt.registerTask('ci', ['build', 'package']);
};
