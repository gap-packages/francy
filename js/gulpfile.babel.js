let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let gutil = require('gulp-util');
let del = require('del');
let webpack = require('webpack-stream');
let webpackConfig = require('./webpack.config.js');
let gulpSequence = require('gulp-sequence');

gulp.task('clean', function(cb) {
  return del(['./dist']);
});

gulp.task('webpack-amd', function() {
  gulp.src('./src/francy.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist/francy/amd'));
});

gulp.task('browserify', function() {
  browserify({
      entries: './src/francy.js',
      debug: true
    })
    .transform(babelify)
    .on('error', gutil.log)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('francy.bundle.js'))
    .pipe(gulp.dest('./dist/francy/browser'));
});

gulp.task('css', function() {
  gulp.src(['./css/**/*']).pipe(gulp.dest('./dist/francy/css'));
});

gulp.task('js', function() {
  gulp.src(['./lib/d3.v4.min.js']).pipe(gulp.dest('./dist/francy/lib'));
});

gulp.task('jupyter', function() {
  gulp.src(['./jupyter/**/*']).pipe(gulp.dest('./dist/francy/jupyter'));
});

gulp.task('default', gulpSequence('clean', ['webpack-amd', 'browserify', 'css', 'js', 'jupyter']));
