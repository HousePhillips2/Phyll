const gulp             = require('gulp');
const eslint           = require('gulp-eslint');
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
const browserSync      = require('browser-sync');
const reload           = browserSync.reload;

// fire up the server with hooks for browser-sync
gulp.task('server-sync',  (cb) => {
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

// browser-sync loads a separate server at port 8888 for a live view of /dist output
gulp.task('browser-sync', ['webpack','server-sync'], () => {
  browserSync({
    proxy: "localhost:8080",  // local node app address
    port: 8888,  // use *different* port than above
    notify: true
  });
});

// check all .js and .jsx files in src for common errors
gulp.task('lint', () => {
  gulp.src('src/**/*.{js,jsx}')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// run all tests in server/tests/mocha
gulp.task('mochaSuite', () => {
  gulp.src('./server/tests/mocha/*.js', {
    read: false,
    require: [
      'should',
      'enzyme',
      'chai',
      'sinon'
      ]})
    .pipe(mocha({reporter: 'progress'}))
});

// process src directory with webpack
gulp.task('webpack', () => {
  gulp.src('src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

// run webpack and start the server for a more organic approach
gulp.task('build', ['webpack'], () => {
  nodemon({
    script: 'server/server.js'
  });
});

// start and watch the complete local dev environment with no linting or tests
gulp.task('start', ['browser-sync'], () => {
  gulp.watch(['./server/**/*.*','./src/**/*.*'], ['webpack'], reload);
});

// test and process src directory
gulp.task('process', ['lint', 'mochaSuite', 'webpack'], () => {
  console.log('That\'s some good looking code. Proceed.');
});

// start the local dev environment with linting and tests
gulp.task('dev', ['process', 'start'], ()=> {
  console.log('That\'s some clean code!');
});