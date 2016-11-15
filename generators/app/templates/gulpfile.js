const gulp = require('gulp');
require('require-dir')('./gulp');

gulp.task('default', [
  'sass',
  'scripts',
  'images',
]);
