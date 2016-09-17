const gulp             = require('gulp');
const eslint           = require('gulp-eslint');
const connect          = require('gulp-connect');
const nodemon          = require('gulp-nodemon');
const mocha            = require('gulp-mocha');
const inject           = require('gulp-inject');
const babel            = require('gulp-babel');
const should           = require('should');
const enzyme           = require('enzyme');
const chai             = require('chai');
const sinon            = require('sinon');
const webpack          = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');
var browserSync        = require('browser-sync');
var reload             = browserSync.reload;

gulp.task('checkin', () => console.log('From what I can tell I\'m working fine'))

gulp.task('browser-sync', ['webpack','nodemon'], () => {
  browserSync({
    proxy: "localhost:8080",  // local node app address
    port: 8888,  // use *different* port than above
    notify: true
  });
});

gulp.task('nodemon',  (cb) => {
  let called = false;
  return nodemon({
    script: 'server/server.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start',  () => {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart',  () => {
    setTimeout( () => {
      reload({ stream: false });
    }, 1000);
  });
});

gulp.task('start', ['browser-sync'], function () {
  gulp.watch(['./src/**/*.*'], ['webpack'], reload);
});

gulp.task('lint', () => {
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
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

gulp.task('dev', ['lint', 'mochaSuite', 'start'], ()=> {
  console.log('That\'s some clean code!')
});

gulp.task('default', ['lint', 'mochaSuite', 'webpack'], () => {
  console.log('That\'s some good looking code. Proceed.')
})