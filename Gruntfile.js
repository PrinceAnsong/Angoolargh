module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n\n'
            },
            js: {
                src: ['src/js/bootstrap.js', 'src/js/directives/app_list.js', 'src/js/**/*.js'],
                dest: 'build/<%= pkg.name %>.js'
            },
            css: {
                src: ['src/css/**/*.css'],
                dest: 'build/<%= pkg.name %>.css'
            }
        },
        ngmin: {
            controllers: {
                src: ['build/<%= pkg.name %>.js'],
                dest: 'build/<%= pkg.name %>.ngmin.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/<%= pkg.name %>.ngmin.js',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            css:{
                src: 'build/<%= pkg.name %>.css',
                dest: 'dist/css/<%= pkg.name %>.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'ngmin', 'uglify', 'cssmin']);

};