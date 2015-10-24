"use strict";

var path = require('path');
var _ = require('lodash');

module.exports = function(grunt) {
  var directories = {
    app: "app",
    target: "target",
    development: "target/development",
    dist: "target/dist"
  };

  grunt.loadNpmTasks('grunt-webpack');
  require('grunt-contrib-compress/tasks/compress')(grunt);
  require('grunt-contrib-copy/tasks/copy')(grunt);
  var webpackConfig = require("./webpack.config.js");

  grunt.initConfig({
    copy: {
      development: {
        expand: true,
        cwd: directories.app,
        src: ['*.html'],
        dest: directories.development
      },
      dist: {
        expand: true,
        cwd: directories.app,
        src: ['*.html'],
        dest: directories.dist
      }
    },

    webpack: {
      options: webpackConfig,
      dist: {
        output: { path: directories.dist }
      }
    },

    "webpack-dev-server": {
      options: {
        port: 4321,
        webpack: webpackConfig
      },

      development: {
        contentBase: directories.development,
        keepAlive: true,
        webpack: {
          devtool: "eval",
          debug: true
        }
      }
    }
  });

  function setupPackage(grunt) {
    var name = grunt.file.readJSON("./package.json")["name"];
    grunt.config.merge({
      compress: {
        app: {
          options: {
            archive: directories.target + '/' + name + '.tgz'
          },
          files: [
            {cwd: directories.dist, src: ['**'], expand: true }
          ]
        },
      }
    });

    grunt.registerTask('version', 'generate app version file', function() {
      var shelljs = require("shelljs");
      var version = {
        name: grunt.file.readJSON("package.json")["name"],
        revision: shelljs.exec("git rev-parse HEAD", {silent: true}).output.trim()
      };
      if (process.env.BUILD_NUMBER) {
        version.build = process.env.BUILD_NUMBER
      }
      grunt.file.write(directories.target + "/version.json", JSON.stringify(version));
      grunt.file.write(directories.dist + "/version.json", JSON.stringify(version));
    });


    grunt.registerTask('package', 'package into tgz file for distribution.', [
      'build',
      'version',
      'compress:app',
    ]);
  }
  setupPackage(grunt);

  grunt.registerTask('serve', 'serve the app in development mode', [
    'copy:development',
    'webpack-dev-server:development',
  ]);

  grunt.registerTask('build', 'build the app for distribution', [
    'copy:dist',
    'webpack:dist',
  ]);

  grunt.registerTask('ci', ['build', 'package']);
};
