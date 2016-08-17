module.exports = function(grunt) {

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
                files: ["templates/*.hbs"],
                tasks: ["handlebars:compile"],
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
                    processName: function(filePath) {
                        return filePath.replace(/^templates\//, '').replace(/\.hbs$/, '');
                    }
                },
                files: {
                    'templates/templates.js': ['templates/*.hbs']
                }
            }
        },

        removelogging: {

            js: {

                src: "src/*.js",

                options: {
                    // see below for options. this is optional. 
                }

            }
        },

        jsbeautifier: {

            files: ["src/**/*.js", "templates/*.hbs", "!templates/templates.js"],

            options: {

                html: {
                    braceStyle: "collapse",
                    indentChar: " ",
                    indentScripts: "keep",
                    indentSize: 4,
                    maxPreserveNewlines: 10,
                    preserveNewlines: false,
                    unformatted: ["a", "sub", "sup", "b", "i", "u"],
                    wrapLineLength: 0
                },
                css: {
                    indentChar: " ",
                    indentSize: 4
                },
                js: {
                    braceStyle: "collapse",
                    breakChainedMethods: false,
                    indentChar: " ",
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0,
                    endWithNewline: true
                }
            }

        }

    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks("grunt-remove-logging");
    grunt.loadNpmTasks("grunt-jsbeautifier");

    grunt.registerTask("default", ["watch"]);

    grunt.registerTask("clean", ["removelogging:js", "jsbeautifier"]);

};
