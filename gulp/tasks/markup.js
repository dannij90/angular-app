/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Strip - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var plugin = require('gulp-load-plugins')();
var minifyHTML = require('gulp-minify-html');


// Markup - Views
//--------------------------------

var opts = {
    conditionals: true,
    quotes: true,
    spare: true,
	empty: true
};

gulp.task('markup', function() {
    return gulp.src([
            config.paths.app + '/index.html',
            config.paths.app + '/**/*.template.html'
        ])
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest(config.paths.dist));
});
