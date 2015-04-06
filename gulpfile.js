var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    UglifyJS = require("uglify-js"),
    newer = require('gulp-newer');

gulp.task('styles', function(){
  return gulp.src(['scss/*.scss',
                   'scss/**/*.scss'], 
            {base: 'scss/'} )
      .pipe(plumber())
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
      // Watch .scss files
      gulp.watch('scss/*.scss', ['styles']);
      gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);