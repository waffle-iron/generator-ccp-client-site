const gulp = require('gulp');
const config = require('./config');

gulp.task('images', () => {
  gulp.src(config.paths.images)
  .pipe(gulp.dest(`${config.paths.dist}/img`));
});
