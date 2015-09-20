module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var jsSrc = ['bower_components/jquery/dist/jquery.min.js','bower_components/magnific-popup/dist/jquery.magnific-popup.min.js','src/js/vendor/owlgraphic/owlcarousel/owl.carousel.min.js','src/js/intro.js', 'src/js/tiles.js']
  var jsDest = 'public/js/built.js'

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sourcemap: true,
          sassDir: 'src/scss',
          cssDir: 'public/css'
        }
      }
    },
    concat: {
      compile: {
        src: jsSrc,
        dest: jsDest
      }
    },
    uglify: {
      compile: {
        src: jsSrc,
        dest: jsDest
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, flatten: true, src: ['bower_components/magnific-popup/dist/*.css'], dest: 'public/css', filter: 'isFile'},
        ],
      },
    },
    watch: {
      scripts: {
        files: 'src/js/**/*.js', // tous les fichiers JavaScript de n'importe quel dossier
        tasks: ['concat:compile']
      },
      styles: {
        files: 'src/scss/**/*.scss', // tous les fichiers Sass de n'importe quel dossier
        tasks: ['compass:dist']
      }
    }
  });

  grunt.registerTask('default', ['dev', 'watch']);
  grunt.registerTask('dev', ['compass:dist', 'copy:main', 'concat:compile']);    
  grunt.registerTask('prod', ['compass:dist', 'copy:main', 'uglify:compile']);
}