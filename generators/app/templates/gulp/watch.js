const gulp = require('gulp');
const config = require('./config');

gulp.task('watch', () => {
  gulp.watch(config.paths.sass, ['sass']);
  gulp.watch(config.paths.scripts, ['scripts']);
});
