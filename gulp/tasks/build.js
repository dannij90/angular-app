/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Build - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');


//Load helper modules

var stylish = require('jshint-stylish');
var plugin = require('gulp-load-plugins')();
var del = require('del');


// JSHint
//--------------------------------

gulp.task('jshint', function() {
    return gulp.src([
            config.exclude + config.paths.app + '/core/translate.module.js',
            config.paths.app + '/**/*.js'
        ])
        .pipe(plugin.jshint())
        .pipe(plugin.jshint.reporter(stylish))
        .pipe(plugin.jshint.reporter('fail'));
});


// Build
//--------------------------------

gulp.task('build', function() {
    return gulp.start('build-after-clean');
});


// Build - After Clean
//--------------------------------

gulp.task('build-after-clean', [
    'scripts',
    'markup',
    'images',
    'styles',
], function() {
    return gulp.start('clean-build');
});


// Clean - Remove unused files
//--------------------------------

gulp.task('clean-build', function(cb) {
    del([
        config.paths.dist + '/index.css',
        config.paths.dist + '/sprite.style.css'
    ], cb);
});