const gulp = require('gulp');
const config = require('./config');
const browserify = require('browserify');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');

gulp.task('scripts', () => {
  browserify(config.paths.scriptsEntry)
  .bundle()
  .on('error', (err) => {
    gutil.log(err.toString());
  })
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(config.paths.dist));
});
