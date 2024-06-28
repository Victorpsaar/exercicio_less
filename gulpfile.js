const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));

function comprimeImage () {
    return gulp.src('./source/images/*').pipe(imagemin()).pipe(gulp.dest('./build/images'))
}

function comprimeJs () {
    return gulp.src('./source/scripts/*.js').pipe(uglify()).pipe(gulp.dest('./build/scripts'))
}

function compilaSass () {
    return gulp.src('./source/styles/main.scss').pipe(sass).pipe(gulp.dest('./build/styles'))
}

exports.default = function () {
    gulp.watch('./source/styles/main.css', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJs))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImage))
}