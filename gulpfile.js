var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task("es6", function() {
  gulp.src(["./js/*.js", "./js/services/*.js"])
  .pipe(babel({
    "presets": ["es2015"]
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest("dist"));
});

gulp.task("sass", function() {
  return gulp.src("./styles/views/*.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("dist"));
});

gulp.watch('./styles/views/*.scss', ['sass']);
gulp.watch(["./js/*.js", "./js/services/*.js"], ['es6']);

gulp.task("default", ['es6', 'sass']);
