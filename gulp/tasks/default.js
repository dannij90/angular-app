var gulp = require('gulp');
var config = require('../config');

//Load helper modules
livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var connect = require('gulp-connect');


gulp.task('default', ['build'], function() {
    connect.server({
        root: config.paths.dist,
        port: config.server.port
    });

    gulp.watch(config.paths.app + '/**/*.html', ['markup']).on('change', reload);
    gulp.watch(config.paths.app + '/**/*.js', ['scripts']).on('change', reload);
    gulp.watch(config.paths.app + '/**/*.less', ['styles']).on('change', reload);
    gulp.watch(config.paths.assets.base + '/**/*.less', ['styles']).on('change', reload);
});