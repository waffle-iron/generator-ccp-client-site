const gulp = require('gulp');
const config = require('./config');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src(config.paths.sassEntry)
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('bundle.css'))
  .pipe(gulp.dest(config.paths.dist));
});
