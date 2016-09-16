const gulp = require('gulp');
const eslint = require('gulp-eslint');
const connect = require('gulp-connect');

gulp.task('checkin', () => console.log('From what I can tell I\'m working fine'))

gulp.task('lint', () => {
    return gulp.src('src/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
});

gulp.task('startLocal', function() {
  connect.server({
    root: 'src/public/',
    port: process.env.PORT || 8080,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/**/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./src/**/*.html'], ['html']);
});

gulp.task('default', ['lint', 'startLocal', 'watch'], function() {
  console.log('You old so and so. That\'s some clean code!')
});