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

  grunt.config('copy.dist.files',
    grunt.config('copy.dist.files').concat([{
      cwd: 'app',
      expand: true,
      src: ['icon/**/*'],
      dest: 'target/dist'
    }])
  );
};
