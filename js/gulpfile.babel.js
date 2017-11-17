let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let gutil = require('gulp-util');
let del = require('del');
let webpack = require('webpack-stream');
let webpackConfig = require('./webpack.config.js');
let gulpSequence = require('gulp-sequence');
let mocha = require('gulp-mocha');
let esdoc = require('gulp-esdoc');
let eslint = require('gulp-eslint');

gulp.task('clean', function(cb) {
  return del(['./dist']);
});

gulp.task('webpack-amd', function(cb) {
  return gulp.src('./src/francy.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist/francy/amd'));
});

gulp.task('browserify', function(cb) {
  return browserify({
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

gulp.task('css', function(cb) {
  return gulp.src(['./css/**/*']).pipe(gulp.dest('./dist/francy/css'));
});

gulp.task('js', function(cb) {
  return gulp.src(['./node_modules/d3/build/d3.min.js']).pipe(gulp.dest('./dist/francy/lib'));
});

gulp.task('jupyter', function(cb) {
  return gulp.src(['./jupyter/**/*']).pipe(gulp.dest('./dist/francy/jupyter'));
});

gulp.task('test', function(cb) {
  return gulp.src('test/**/*.test.js', { read: false })
    .pipe(mocha({
      require: 'babel-core/register',
      reporter: 'dot'
    }));
});

gulp.task('docs', function(cb) {
  return gulp.src('./src')
    .pipe(esdoc({ destination: "./dist/francy/docs" }));
});

gulp.task('lint', function(cb) {
  return gulp.src(['./src/**/*.js', '!node_modules/**'])
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError()).on("error", function(e) {});
});

gulp.task('default', gulpSequence('lint', 'test', 'clean', ['webpack-amd', 'browserify', 'css', 'js', 'jupyter', 'docs']));
