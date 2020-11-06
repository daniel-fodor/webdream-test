'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');

var projectName = 'sir';

gulp.task('styles', function() {
    return gulp.src('./sass/style.scss')
        // Compile SASS files
        .pipe(sass({
            outputStyle: 'nested',
            onError: console.error.bind(console, 'Sass error:')
        }))
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer())
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(cb) {
    gulp.watch('sass/**/**.scss', gulp.series('styles'));
});