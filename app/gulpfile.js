// var gulp = require('gulp');

// gulp.task('autoprefixer', function () {
//     var postcss      = require('gulp-postcss');
//     var sourcemaps   = require('gulp-sourcemaps');
//     var autoprefixer = require('autoprefixer');
 
//     return gulp.src('./src/styles/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(postcss([ autoprefixer({
//         	cascade: false,
//         	add: true,
//         	flexbox: true,
//         	grid: true
//         	}) ]))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./dist'));
// });

// -------------------------------------------------------------------------------------------------------

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');
// source maps allows source to point to originial
// non minified css, makes debugging much easier
var sourcemaps = require('gulp-sourcemaps');
// js minifier
var uglify = require('gulp-uglify');
// img minifier
var imageMin = require('gulp-imagemin');

// var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var less = require ('gulp-less');

//autoprefixer important to introduce old browser capability to css
var autoprefixer = require('gulp-autoprefixer');

// to require local use ./ in front of path
// var menu = require('./menu.json');

gulp.task('templates', function(){
	// used to dump static data into templates and furthedr into index.html

	// the data and options vars are for passing to handlebars to handle partials

	var data = {
		// not a huge fan.. data shouldnt be streamed
		// from dev gulp file
		year: new Date().getFullYear(),
		menu: menu.menuItems
	};

	var options = {
		batch: ['src/templates/partials']
	}

	return gulp.src(['src/templates/**/*.hbs', 'src/templates/partials/**/*.hbs'])
	// do not include the partials directory so that 
	// we dont get individual files output for them
		.pipe(handlebars(data,options))
		.pipe(rename(function(path) {
			path.extname = '.html';
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('images', function() {
	gulp.src(['src/img/**/*'])
		.pipe(imageMin())
		.pipe(gulp.dest('dist/img'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	gulp.src(['src/scripts/**/*.js']) // source
		.pipe(sourcemaps.init()) // for easier debuggin
		.pipe(uglify()) // minify js
		.pipe(sourcemaps.write()) // sub unminified code for debugging
		.pipe(gulp.dest('dist/scripts')) // set dest
		.pipe(browserSync.stream()); // refresh browser
});

gulp.task('styles', function() {
	gulp.src(['src/styles/**/*.less', 'src/styles/**/*.css'])
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(minifyCss())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());
		// on change of css file, minify it, dump 
		//minified version in dist dir and sync
});

// middle argument is initialization. runs the 4 tasks
// immediately before startup
gulp.task('default', ['styles','images','scripts'], function() {
	/* console.log ('Your first gulp task has run!'); */
	browserSync.init({
		server: './'
	});
	//gulp.watch('src/**/*', browserSync.reload);
	// on change of css watch styles and activate styles task
	gulp.watch(['src/styles/**/*.less', 'src/styles/**/*.css'], ['styles']);
	gulp.watch('src/img/**/*', ['images']);
	gulp.watch('src/scripts/**/*.js', ['scripts']);
	// gulp.watch('src/templates/**/*.hbs', ['templates']);
	gulp.watch(['*.html,*.php'], browserSync.reload);
});