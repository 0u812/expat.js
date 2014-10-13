module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

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
    }

    toolchain: grunt.option('toolchain');
    buildpath: grunt.option('build-path');
    installpath: grunt.option('install-path');
    sourceroot: grunt.option('source-root'); // good job losers https://github.com/gruntjs/grunt/issues/965
  });
//   console.log('sourceroot:\n');
//   console.log(sourceroot);

  grunt.registerTask('default', ['shell']);
};
