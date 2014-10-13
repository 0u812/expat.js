module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    shell: {
      options: {
        execOptions: {
          cwd: '<%=buildpath%>'
        }
      },
      target: {
          command: 'emconfigure cmake -DCMAKE_TOOLCHAIN_FILE=<%=toolchain%> -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=<%=installpath%> <%=sourceroot%> && make -j8 && make install'
      }
    }
  });

  var toolchain = grunt.option('toolchain');
  var buildpath = grunt.option('build-path');
  var installpath = grunt.option('install-path');
  var sourceroot = grunt.option('source-root'); // good job losers https://github.com/gruntjs/grunt/issues/965
  console.log('sourceroot:\n');
  console.log(sourceroot);

  grunt.registerTask('default', ['shell']);
};
