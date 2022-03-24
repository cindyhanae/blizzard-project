const gulp = require("gulp")

const sass = require("gulp-sass")(require("sass"))
const autoprefixer = require("gulp-autoprefixer")

function compileSass(){
  return gulp.src("scss/*.scss")
  .pipe(sass({outputStyle : 'compressed'}))
  .pipe(autoprefixer({
    overrideBrowserslist: ["last 2 versions"],
    cascade: false
  }))
  .pipe(gulp.dest("css/"))
}

// task list
gulp.task("sass", compileSass)

function watch(){
  gulp.watch("scss/*.scss", compileSass)
}

gulp.task("default", watch)