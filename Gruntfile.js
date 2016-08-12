module.exports = function (grunt) {

    grunt.initConfig({

        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },

        watch: {
            scripts: {
                files: ['Gruntfile.js', 'src/**/*.js'],
                tasks: ['jshint'],
                options: {
                    interrupt: true,
                },
            },

            templates: {
                files: [ "templates/*.hbs" ],
                tasks: [ "handlebars:compile" ],
                options: {
                    interrupt: true
                }
            }
        },

        handlebars: {
            compile: {
                options: {
                    namespace: 'dw.templates',
                    amd: false,
                    processName: function (filePath) {
                        return filePath.replace(/^templates\//, '').replace(/\.hbs$/, '');
                    }
                },
                files: {
                    'templates/templates.js': ['templates/*.hbs']
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask("default", ["watch"]);

};