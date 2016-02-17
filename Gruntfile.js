module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            // this is the "dev" Sass config used with "grunt watch" command
            dev: {
                options: {
                    style: 'compressed',
                    // tell Sass to look in the Bootstrap stylesheets directory when compiling
                    loadPath: 'bower_components/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    // the first path is the output and the second is the input
                    'css/style.css': 'scss/app.scss'
                }
            }
            // this is the "production" Sass config used with the "grunt buildcss" command
            //dist: {
            //    options: {
            //        style: 'compressed',
            //        loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
            //    },
            //    files: {
            //        'static/css/mystyle.css': 'sass/mystyle.scss'
            //    }
            //}
        },
        // configure the "grunt watch" task
        watch: {
            sass: {
                files: 'scss/**/*',
                tasks: ['sass:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // "grunt buildcss" is the same as running "grunt sass:dist".
    // if I had other tasks, I could add them to this array.
    grunt.registerTask('buildcss', ['sass:dev', 'watch']);
};