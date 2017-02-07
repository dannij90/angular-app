/* -------------------------------------------------------------------------------------------------
 ////////////////////////////////////////////////////////////////////////////////////////////////////

 Styles - Gulp Processes

 ////////////////////////////////////////////////////////////////////////////////////////////////////
 ------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var es = require('event-stream');
var plugin = require('gulp-load-plugins')();
var del = require('del');

// Styles - Layouts
//--------------------------------

gulp.task('styles', function () {
	return es.merge(
		gulp.src([
				config.paths.assets.less + '/app.less'
			])
			.pipe(plugin.less())
			.pipe(plugin.autoprefixer(config.autoprefixerOptions))
			.pipe(plugin.concatCss('app.min.css'))
			.pipe(plugin.cssmin())
			.pipe(gulp.dest(config.paths.dist))
	);
});