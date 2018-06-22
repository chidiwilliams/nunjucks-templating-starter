const fs = require('fs');
const gulp = require('gulp');
const njkRender = require('gulp-nunjucks-render');
const sassRender = require('gulp-sass');
const minify = require('gulp-minify');
const config = require('./config/config');

gulp.task('dir', function() {
  if (!fs.existsSync(config.gulp.public_dir)) {
    fs.mkdirSync(config.gulp.public_dir);
    if (!fs.existsSync(config.gulp.public_dir + '/css')) {
      fs.mkdirSync(config.gulp.public_dir + '/css');
    }
    if (!fs.existsSync(config.gulp.public_dir + '/js')) {
      fs.mkdirSync(config.gulp.public_dir + '/js');
    }
  }
});

gulp.task('njk', function() {
  return gulp
    .src(config.gulp.views_dir + '/*.@(html|njk)')
    .pipe(
      njkRender({
        path: [config.gulp.views_dir],
        data: config.njk.templateVars,
      })
    )
    .pipe(gulp.dest(config.gulp.public_dir));
});

gulp.task('sass', function() {
  return gulp
    .src(config.gulp.assets_dir + '/scss/**/*.scss')
    .pipe(
      sassRender({
        outputStyle: config.sass.outputStyle,
      })
    )
    .pipe(gulp.dest(config.gulp.public_dir + '/css'));
});

gulp.task('jsMinify', function() {
  return gulp
    .src(config.gulp.assets_dir + '/js/**/*.js')
    .pipe(
      minify({
        ext: {
          src: '.js',
          min: '.min.js',
        },
        noSource: config.js.doKeepSource,
        exclude: [config.gulp.vendor_dir],
        ignoreFiles: ['.min.js'],
      })
    )
    .pipe(gulp.dest(config.gulp.public_dir + '/js'));
});

gulp.task('js', function() {
  return gulp
    .src(config.gulp.assets_dir + '/js/**/*.js')
    .pipe(gulp.dest(config.gulp.public_dir + '/js'));
});

gulp.task('vendorJS', function() {
  return gulp
    .src(config.gulp.vendor_dir + '/js/**/*.js')
    .pipe(gulp.dest(config.gulp.public_dir + '/js'));
});

gulp.task('vendorCSS', function() {
  return gulp
    .src(config.gulp.vendor_dir + '/css/**/*.css')
    .pipe(gulp.dest(config.gulp.public_dir + '/css'));
});

gulp.task('default', function() {
  gulp.start('dir');
  gulp.start('njk');
  gulp.start('sass');
  config.js.doCompress ? gulp.start('jsMinify') : gulp.start('js');
  gulp.start('vendorJS');
  gulp.start('vendorCSS');
});

module.exports = gulp;
