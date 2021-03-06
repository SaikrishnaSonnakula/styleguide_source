'use strict';

var buildPlugin = require('build-plugin/webpack');
var path = require('path');
var entryPaths = {
  modern: path.resolve(__dirname, 'app/scripts/modern/index.js')
};

var dirs = {
  bourbon: require('node-bourbon').includePaths,
  bourbonNeat: require('node-neat').includePaths
};

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-md2html');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-sass');

  buildPlugin(grunt, {
    useEslint: true,
    webpack: {
      entry: entryPaths,
      devEntry: entryPaths,
      root: [path.resolve('vendor')],
      loaders: [{
        test: require.resolve('./vendor/fixedsticky'),
        loader: 'imports?jQuery=jquery'
      }],
      alias: {
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
            title: function(path) {
              var extractedTitleFromPath = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
              var nameInTitleCase = extractedTitleFromPath.replace(/\w\S*/g, function(text) {
                return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
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
    watch: {
      files: ['*.svg', '_template.css', '_template.html'],
      options: {
        cwd: 'icons'
      },
      tasks: ['webfont']
    }
  });

  grunt.config.merge({
    watch: {
      files: ['**/*.scss'],
      options: {
        cwd: './'
      },
      tasks: ['sass']
    }
  });

  grunt.config.merge({
    copy: {
      dist: {
        files: [{
          src: ['**/*.html', '**/*.css', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff']
        }, {
          cwd: 'lib/modern',
          expand: true,
          src: ['**/*.html', '**/*.css', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff'],
          dest: 'target/dist'
        }]
      }
    },
  });

  grunt.config.merge({
    sass: {
      options: {
        sourceMap: false,
        includePaths: ['./node_modules'].concat(dirs.bourbonNeat)
      },
      dist:{
        files:[
          {'target/dist/main.css' : 'app/scss/modern/index.scss'},
        ]
      }
    }
  });

  grunt.config.merge({
    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'lib/modern/assets/fonts',
        destCss: 'lib/modern/stylesheets',
        options: {
          font: 'kp-icons',
          template: 'icons/_template.css',
          templateOptions: {
            classPrefix: 'icon-',
            mixinPrefix: 'icon-'
          },
          rename: function(name) {
            return path.basename(name).toLowerCase();
          },
          hashes: false,
          stylesheet: 'scss',
          types: 'eot,woff,ttf,svg',
          syntax: 'bootstrap',
          htmlDemoTemplate: 'icons/_template.html',
          htmlDemoFilename: 'icons',
          destHtml: 'app/'
        }
      }
    }
  });

  grunt.registerTask('prebuild', ['sass', 'md2html']);
  grunt.registerTask('ci', ['jshint', 'test:ui', 'build', 'package']);
};
