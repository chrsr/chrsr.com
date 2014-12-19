module.exports = function(grunt) {

    grunt.initConfig({

        src: {
            base: 'src/',
            styles: '<%= src.base %>less/',
            css: '<%= src.base %>css/',
            js: '<%= src.base %>js/'
        },

        dist: {
            base: 'dist/',
            styles: '<%= dist.base %>css/',
            js: '<%= dist.base %>js/'
        },

        less: {
            dev: {
                options: {
                    paths: ['<%= src.styles %>'],
                    sourceMap: true,
                    compress: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= src.styles %>',
                    src: ['**/*.less'],
                    dest: '<%= src.css %>',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    paths: ['<%= src.styles %>'],
                    sourceMap: true,
                    compress: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= src.styles %>',
                    src: ['**/*.less'],
                    dest: '<%= dist.css %>',
                    ext: '.css'
                }]
            }
        },

        // autoprefixer: {
        //     options: {},
        //     no_dest: {
        //         src: '<%= dist.styles %>'
        //     }
        // },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },

        watch: {
            autoprefixer: {
                files: ['www/***/**/*.css'],
                tasks: ['autoprefixer']
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

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Define tasks
    grunt.registerTask('default', ['less']);
    grunt.registerTask('build', ['less', 'htmlmin', 'copy']);

};