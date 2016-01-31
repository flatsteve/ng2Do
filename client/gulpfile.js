var gulp = require('gulp');
var ts = require('gulp-typescript');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var rimraf = require('gulp-rimraf');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');
var config = {
  sass: 'app/**/*.scss',
  typeScript: 'app/**/*.ts'
};

gulp.task('clean', function() {
  return gulp.src(['app/**/*.js', 'app/**/*.js.map'], { read: false })
  .pipe(rimraf());
});

gulp.task('sass', function() {
  return gulp.src(config.sass, {base: "./"})
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task('tsc', function() {
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'))
    .pipe(livereload());
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

gulp.task('default', ['clean', 'tsc', 'sass', 'serve'], function () {
  livereload.listen();
  gulp.watch([config.typeScript], ['tsc']);
  gulp.watch([config.sass], ['sass']);
});
