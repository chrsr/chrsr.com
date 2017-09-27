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
            base: 'public/',
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
                dest: 'public/css/'
            }
        },

        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                ignores: [
                    "src/js/scripts.js"
                ]
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
                    dest: 'public/'
                }]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: '**/*.{png,jpg,gif}',   // Actual patterns to match
                    dest: 'public/'                  // Destination path prefix
                }]
            }
        },

        concat: {
            src: {
                src: ['src/js/**/*.js', '!src/js/scripts.js'],
                dest: 'src/js/scripts.js'
            },
            dist: {
                src: ['src/js/**/*.js', '!src/js/scripts.js'],
                dest: 'public/js/scripts.js'
            }
        },

        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public/js',
                    src: '**/*.js',
                    dest: 'public/js'
                }]
            }
        },

        connect: {
            server: {
                options: {
                    host:'localhost',
                    base: 'src/',
                    port: 3000,
                    open: true,
                    livereload: true
                }
            }
        },

        watch: {
            autoprefixer: {
                files: ['src/***/**/*.css'],
                tasks: ['autoprefixer']
            },
            js: {
                files: ['src/**/*.js', '!src/js/scripts.js'],
                tasks: ['jshint', 'concat:src']
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
        }

    });

    // Tasks
    grunt.registerTask('default', ['']);

    grunt.registerTask('dev', function () {
        grunt.task.run([
            'less',
            'autoprefixer',
            'concat:src',
            'connect:server',
            'watch'
        ]);
    });

    grunt.registerTask('build', function () {
        grunt.task.run([
            'jshint',
            'concat:src',
            'concat:dist',
            'uglify',
            'less',
            'autoprefixer',
            'imagemin',
            'htmlmin'
        ]);
    });

};