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
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['es6']);
