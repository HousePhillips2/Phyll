const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('checkin', () => console.log('From what I can tell I\'m working fine'))

gulp.task('lint', () => {
    return gulp.src('src/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
});

gulp.task('default', ['lint'], function() {
  console.log('You old so and so.')
});