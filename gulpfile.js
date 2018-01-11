var gulp = require('gulp');
var svgscaler = require('svg-scaler');


gulp.task('default', function() {

    return gulp.src('./icons/*/*.svg')
         .pipe(svgscaler({ width: 40 }))
         .pipe(gulp.dest('./dest/'))
})
