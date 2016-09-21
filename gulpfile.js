const gulp    = require('gulp');
const eslint  = require('gulp-eslint');
const connect = require('gulp-connect');
const nodemon = require('gulp-nodemon');
const mocha   = require('gulp-mocha');
const should  = require('should');
const enzyme  = require('enzyme');
const chai    = require('chai');
const sinon   = require('sinon');


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

gulp.task('any', function () {
  gulp.src('./src/**/*.*')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./src/**/*.*'], ['any']);
});

gulp.task('mochaSuite', () => 
  gulp.src('./src/server/tests/mocha/*.js', {read: false, require: ['should', 'enzyme', 'chai', 'sinon']})
    .pipe(mocha({reporter: 'progress'}))
);

gulp.task('default', ['lint', 'mochaSuite'], () => {
  console.log('👌')
})

gulp.task('dev', ['lint', 'startLocal', 'watch'], ()=> {
  console.log('That\'s some clean code!')
});