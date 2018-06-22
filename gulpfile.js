const gulp = require('gulp');
const njkRender = require('gulp-nunjucks-render');
const sassRender = require('gulp-sass');
const config = require('./config/config');

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

gulp.task('default', function () {
  gulp.start('njk');
  gulp.start('sass');
})

module.exports = gulp;
