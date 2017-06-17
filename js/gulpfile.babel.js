let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let gutil = require('gulp-util');

gulp.task('es6', function () {
  browserify({
    entries: './src/francy.js',
    debug: true
  })
    .transform(babelify)
    .on('error', gutil.log)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('francy.bundle.js'))
    .pipe(gulp.dest('./dist/francy'));
});

gulp.task('css', function () {
  gulp.src(['./css/**/*']).pipe(gulp.dest('./dist/francy/css'));
});

gulp.task('js', function () {
  gulp.src(['./lib/d3.v4.min.js']).pipe(gulp.dest('./dist/francy'));
});

gulp.task('jupyter', function () {
  gulp.src(['./jupyter/**/*']).pipe(gulp.dest('./dist/francy/jupyter'));
});

gulp.task('default', ['es6', 'css', 'js', 'jupyter']);
