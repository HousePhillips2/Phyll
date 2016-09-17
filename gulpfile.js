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
    root: 'src/',
    port: process.env.PORT || 8080,
    livereload: true
  });
});

gulp.task('anyChange', () => {
  gulp.src('./src/**/*.*')
    .pipe(connect.reload());
});
 
gulp.task('watch', () => {
  gulp.watch(['./src/**/*.*'], ['anyChange']);
});

gulp.task('mochaSuite', () => 
  gulp.src('./server/tests/mocha/*.js', {read: false, require: ['should', 'enzyme', 'chai', 'sinon']})
    .pipe(mocha({reporter: 'progress'}))
);

gulp.task('default', ['lint', 'mochaSuite'], () => {
  console.log('That\'s some good looking code. Proceed.')
})

gulp.task('dev', ['lint', 'startLocal', 'watch'], ()=> {
  console.log('That\'s some clean code!')
});

// gulp.task('webpack', () => {
//   gulp.src('server/server.js')
//     .pipe(webpack())
//     .pipe(gulp.dest('dist/'));
// });

// gulp.task('webpack-dev-server', (callback) => {
//   var compiler = webpack({
//       // configuration
//   });

//   new WebpackDevServer(compiler, {})
//     .listen(3000, "localhost", (err) => {
//       if(err) throw new gutil.PluginError('webpack-dev-server', err);
//       gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
//     });
// });