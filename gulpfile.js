var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var concat = require('gulp-concat');
var replace = require('gulp-replace');

var headerComment = '\n/**\n' + ' * <%= file.relative %>\n' + ' */\n\n';

var paths = {
  "src": "src/*.js",
  "dest": "dist"
}

gulp.task('build:combined', function() {
  return gulp.src(paths.src)
    .pipe(header(headerComment))
    .pipe(concat('__.js'))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('build:combined:min', function() {
  return gulp.src(paths.src)
    .pipe(concat('__.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('build:individual', function() {
  return gulp.src(paths.src)
    .pipe(header(headerComment))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('build:individual:min', function() {
  return gulp.src(paths.src)
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('build', [
  'build:combined', 
  'build:combined:min', 
  'build:individual', 
  'build:individual:min'
]);

gulp.task('watch', function() {
  gulp.watch(paths.src, ['build']);
});

gulp.task('default', ['build']);
