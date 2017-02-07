/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Watch - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('watch', function() {
    gulp.watch(config.paths.app + '/**/*.html', ['markup']).on('change', reload);
    gulp.watch(config.paths.app + '/**/*.js', ['scripts']).on('change', reload);
    gulp.watch(config.paths.app + '/**/*.less', ['styles']).on('change', reload);
    gulp.watch(config.paths.assets.base + '/**/*.less', ['styles']).on('change', reload);
});