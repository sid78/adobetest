var gulp = require('gulp');

var sass = require('gulp-sass');

var uglifycss = require('gulp-uglifycss');

var minify = require('gulp-minify');

gulp.task('sass', function(){
    return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})

gulp.task('css', function(){
    return gulp.src('./css/*.css')
 //   .pipe(sass().on('error', sass.logError))
   .pipe(uglifycss({
       
       "ugglyComments": true
   }))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('min-js', function() {
    return gulp.src('./js/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('./dist'))
});