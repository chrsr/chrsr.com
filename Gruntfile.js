module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        src: {
            base: 'src/',
            styles: '<%= src.base %>less/',
            css: '<%= src.base %>css/',
            js: '<%= src.base %>js/'
        },

        dist: {
            base: 'dist/',
            css: '<%= dist.base %>css/',
            js: '<%= dist.base %>js/'
        },

        less: {
            src: {
                options: {
                    paths: ['<%= src.styles %>'],
                    compress: true,
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= src.styles %>',
                    src: ['**/*.less'],
                    dest: '<%= src.css %>',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            all: {
                expand: true,
                flatten: true,
                src: 'src/css/*.css',
                dest: 'dist/css/'
            }
        },

        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'src/**/*.js'
            ]
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.html',
                    dest: 'dist/'
                }]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: '**/*.{png,jpg,gif}',   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },

        concat: {
            dist: {
                src: 'src/js/**/*.js',
                dest: 'dist/js/scripts.js'
            }
        },

        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: '**/*.js',
                    dest: 'dist/js'
                }]
            }
        },

        watch: {
            autoprefixer: {
                files: ['src/***/**/*.css'],
                tasks: ['autoprefixer']
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            styles: {
                files: ['src/**/*.less'],
                tasks: ['autoprefixer', 'less']
            },
            options: {
                livereload: true
            }
        },

        connect: {
            server: {
                options: {
                    host:'localhost',
                    port: 3000,
                    keepalive: true
                }
            }
        }

    });

    // Tasks
    grunt.registerTask('default', ['']);

    grunt.registerTask('dev', function () {
        grunt.task.run([
            'less',
            'autoprefixer',
            'connect',
            'watch'
        ]);
    });

    grunt.registerTask('build', function () {
        grunt.task.run([
            'jshint',
            'concat',
            'uglify',
            'less',
            'autoprefixer',
            'imagemin',
            'htmlmin'
        ]);
    });

};