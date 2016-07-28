module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: 'client/assets/app/**/*.js'
        },
        watch: {
            client : {
                files: ['client/app/scripts/*.js',
                    'client/app/views/**/*.html',
                    'client/app/styles/*.css'
                ],
                tasks: ['jshint', 'uglify','copy','cssmin'],
                options: {
                    spawn: false
                }
            }
        },
        uglify: {
            build: {
                src: [
                    'client/app/scripts/*.js'
                ],
                dest: 'server/public/app/scripts/client.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'client/app/styles',
                    src: '*.css',
                    dest: 'server/public/app/styles/',
                    ext: '.min.css'
                }]
            }
        },
        copy: {
            /*angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/*.js",
                    "angular/*.map",
                    "angular-animate/*.js",
                    "angular-animate/*.map",
                    "angular-aria/*.js",
                    "angular-material/*.js",
                    "angular-messages/*.js",
                    "angular-route/*.js",
                    "angular-route/*.map",
                    "angular-ui-bootstrap/dist/*.js",
                    "angular-ui-bootstrap/dist/*.css",
                    "angular-smart-table/dist/*.js",
                    "angular-smart-table/dist/*.map"
                ],
                "dest": "server/public/app/vendors/"
            },*/
            html: {
                expand: true,
                cwd: 'client/app/views/',
                src: [
                    "index.html",
                    "routes/*.html",
                    "partials/*.html",
                    "templates/*.html"
                ],
                "dest": "server/public/app/views/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/bootstrap/",
                src: [
                    "dist/**/*"
                ],
                "dest": "server/public/app/vendors/bootstrap/"
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['copy', 'jshint', 'uglify','cssmin']);
};
