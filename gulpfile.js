const gulp             = require('gulp');
const eslint           = require('gulp-eslint');
const connect          = require('gulp-connect');
const nodemon          = require('gulp-nodemon');
const mocha            = require('gulp-mocha');
const inject           = require('gulp-inject');
const should           = require('should');
const enzyme           = require('enzyme');
const chai             = require('chai');
const sinon            = require('sinon');
const webpack          = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');


gulp.task('checkin', () => console.log('From what I can tell I\'m working fine'))

gulp.task('lint', () => {
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('startLocal', () => {
  connect.server({
    root: 'dist/',
    port: process.env.PORT || 8080,
    livereload: true
  });
});

gulp.task('distChange',() => {
  gulp.src('./dist/index.html')
    .pipe(connect.reload());
});
 
gulp.task('srcWatch', () => {
  gulp.watch(['./src/**/*.*'], ['webpack']);
});

gulp.task('distWatch', () => {
  gulp.watch(['./dist/**/*.*'], ['distChange']);
});

gulp.task('mochaSuite', () => 
  gulp.src('./server/tests/mocha/*.js', {read: false, require: ['should', 'enzyme', 'chai', 'sinon']})
    .pipe(mocha({reporter: 'progress'}))
);

gulp.task('webpack', () => {
  gulp.src('src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('dev', ['lint', 'webpack', 'startLocal','srcWatch', 'distWatch'], ()=> {
  console.log('That\'s some clean code!')
});

gulp.task('default', ['lint', 'mochaSuite', 'webpack'], () => {
  console.log('That\'s some good looking code. Proceed.')
})