module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      options: {
        execOptions: {
          cwd: '<%= buildpath %>'
        }
      },
      target: {
          command: 'emconfigure cmake -DCMAKE_TOOLCHAIN_FILE=<%= toolchain %> -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=<%= installpath %> <%= sourceroot %> && make -j8 && make install'
      }
    },

    toolchain: grunt.option('toolchain'),
    buildpath: grunt.option('build-path'),
    installpath: grunt.option('install-path'),
    sourceroot: grunt.option('source-root'),
  });

  grunt.registerTask('default', ['shell']);
};
