/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Scripts - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var plugin = require('gulp-load-plugins')();
var gutil = require('gulp-util');

var appScripts = [

    //Bower Main Scripts

    config.paths.npm + '/angular/angular.js',
    config.paths.npm + '/angular-ui-router/release/angular-ui-router.js',

    // App scripts
    config.paths.app + '/*.module.js',
    config.paths.app + '/*.controller.js',
    config.paths.app + '/**/*.factory.js',
    config.paths.app + '/**/*.filter.js',
    config.paths.app + '/**/*.directive.js',
    config.paths.app + '/**/*.component.js',

];


// Scripts - App
//--------------------------------

gulp.task('scripts', function() {
    gutil.log(gutil.colors.black.bgGreen('/* Building Main App ------------------------------------ */'));
    return gulp.src(appScripts)
        .pipe(plugin.concat('app.min.js'))
        .pipe(plugin.ngAnnotate())
        //.pipe(plugin.uglify(config.uglifyOptions))
        .pipe(gulp.dest(config.paths.dist));
});