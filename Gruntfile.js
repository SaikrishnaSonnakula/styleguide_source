"use strict";

module.exports = function(grunt) {
  require('build-plugin')(grunt);

  grunt.config('copy.development.files', 
    grunt.config('copy.development.files').concat([{
      cwd: 'app',
      expand: true,
      src: ['icon/**/*'],
      dest: 'target/development'
    }])
  );
};
