const gulp = require("gulp")

const sass = require("gulp-sass")(require("sass"))

function compileSass(){
  return gulp.src("scss/*.scss")
  .pipe(sass({outputStyle : 'compressed'}))
  .pipe(gulp.dest("css/"))
}

// task list
gulp.task("default", compileSass)