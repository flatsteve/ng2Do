var gulp = require('gulp');
var ts = require('gulp-typescript');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var rimraf = require('gulp-rimraf');

var tsProject = ts.createProject('tsconfig.json');
var config = {
  typeScript: 'app/**/*.ts'
};

gulp.task('clean', function() {
  return gulp.src(['app/**/*.js', 'app/**/*.js.map'], { read: false })
  .pipe(rimraf());
});

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
      port: '8080',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('tsc', function() {
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('.')).pipe(livereload());
});

gulp.task('default', ['serve'], function () {
  livereload.listen();
  gulp.watch([config.typeScript], ['tsc']);
});