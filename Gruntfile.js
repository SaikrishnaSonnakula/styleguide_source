"use strict";

var buildPlugin = require('build-plugin/webpack');
var path = require('path');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-md2html');

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
      }],
      alias:{
        'chai-accessible': 'chai-accessible/src/chai-accessible'
      }
    }
  });

  grunt.config.merge({
    md2html: {
      docs: {
        options: {
          layout: '_md_layout.html',
          templateData: {
            title: function(path){
              var extractedTitleFromPath = path.substring(path.lastIndexOf('/')+1, path.lastIndexOf('.'));
              var nameInTitleCase = extractedTitleFromPath.replace(/\w\S*/g, function(text){
                  return text.charAt(0).toUpperCase() +
                  text.substr(1).toLowerCase();
              });
              return nameInTitleCase;
            }
          }
        },
        files: [{
          expand: true,
          src: ['*.md'],
          dest: 'target/dist',
          ext: '.html'
        }]
      }
    }
  });

  grunt.config.merge({
    watch: {
      files: ['*.md'],
      tasks: ['md2html']
    }
  });

  grunt.config.merge({
    copy: {
      dist: {
	files: [{
	  src: ['**/*.html', '**/*.css', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff']
	}]
      }
    },
  });

  grunt.registerTask('prebuild', ['md2html']);
  grunt.registerTask('ci', ['jshint', 'test:ui', 'build', 'package']);
};
