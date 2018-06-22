const gulp = require('gulp');
const njkRender = require('gulp-nunjucks-render');
const sassRender = require('gulp-sass');
const fs = require('fs');
const config = require('./config/config');

gulp.task('dir', function() {
  fs.mkdirSync('public');
  fs.mkdirSync('public/css');
  fs.mkdirSync('public/js');
});

gulp.task('njk', function() {
  return gulp
    .src('resources/views/*.@(html|njk)')
    .pipe(
      njkRender({
        path: ['resources/views'],
        data: config.njk.customVars,
      })
    )
    .pipe(gulp.dest('public'));
});

gulp.task('sass', function() {
  return gulp
    .src('assets/scss/**/*.scss')
    .pipe(
      sassRender({
        outputStyle: config.sass.outputStyle,
      })
    )
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', function() {
  gulp.start('dir');
  gulp.start('njk');
  gulp.start('sass');
});

module.exports = gulp;
