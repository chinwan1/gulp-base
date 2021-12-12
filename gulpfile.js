var gulp = require('gulp');
var del = require('del');
const babel = require('gulp-babel');
var inject = require('gulp-inject');
var browserSync = require('browser-sync')
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css'); 
var projectStart = false;
var paths = {
	src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcLess: 'src/**/*.less',
  srcJS: 'src/**/*.js',

	tmp: 'tmp',
  tmpIndex: 'tmp/index.html',
  tmpCSS: 'tmp/**/*.css',
  tmpJS: 'tmp/**/*.js',

  dist: 'dist',
  distIndex: 'dist/index.html',
  distCSS: 'dist/**/*.css',
  distJS: 'dist/**/*.js'
};

/**
 * DEVELOPMENT
 */
gulp.task('html', function () {
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task('less', function(){ 
	return gulp.src(paths.srcLess). 
	pipe(less()). 
	pipe(minifyCSS({})). 
	pipe(gulp.dest(paths.tmp)); 
}); 
	

gulp.task('js', function () {
  return gulp.src(paths.srcJS)
  .pipe(concat('script.js'))
  .pipe(babel({ presets: ['@babel/env'] }))
  .pipe(gulp.dest(paths.tmp));
});

gulp.task('copy', ['html', 'less','js']);

gulp.task('inject', ['copy'], function () {
  var css = gulp.src(paths.tmpCSS);
  var js = gulp.src(paths.tmpJS);
  var compactFile =  gulp.src(paths.tmpIndex)
    // .pipe(inject( css, { relative:true } ))
    // .pipe(inject( js, { relative:true } ))
    .pipe(gulp.dest(paths.tmp));
		browserSync.reload();
		return compactFile;
});


gulp.task('serve',['inject'] ,function(){
	if(!projectStart) {
		browserSync({
				server: { baseDir: paths.tmp, },
				notify:false
		})
		projectStart = true;
	} 
	});

gulp.task('watch', ['serve'], function () {
	gulp.watch(paths.src, ['inject']);
});

gulp.task('default', ['watch']);
/**
 * DEVELOPMENT END
 */



/**
 * PRODUCTION
 */
gulp.task('html:dist', function () {
  return gulp.src(paths.srcHTML)
    .pipe(htmlclean())
    .pipe(gulp.dest(paths.dist));
});
gulp.task('less:dist', function () {
  return gulp.src(paths.srcLess)
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist));
});
gulp.task('js:dist', function () {
  return gulp.src(paths.srcJS)
    .pipe(concat('script.min.js'))
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});
gulp.task('copy:dist', ['html:dist', 'less:dist', 'js:dist']);
gulp.task('inject:dist', ['copy:dist'], function () {
  var css = gulp.src(paths.distCSS);
  var js = gulp.src(paths.distJS);
  return gulp.src(paths.distIndex)
    .pipe(inject( css, { relative:true } ))
    .pipe(inject( js, { relative:true } ))
    .pipe(gulp.dest(paths.dist));
});
gulp.task('build', ['inject:dist']);
/**
 * PRODUCTION END
 */

gulp.task('clean', function () {
  del([paths.tmp, paths.dist]);
});