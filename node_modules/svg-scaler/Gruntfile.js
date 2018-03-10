var gulp = require('vinyl-fs');
var rename = require('gulp-rename');
var svgscaler = require('./index');

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.config('clean.dest', {
        src: ['./example/dest']
    });

    var sizes = ['16', '32', '64', '128', '256', '512'];

    grunt.registerTask('svg2pngs', function () {

        var done = this.async();
        var svg2pngFiles = [];

        var pngFiles = [];

        var cnt = 0;

        sizes.forEach(function (size) {

            svg2pngFiles.push({
                src: ['example/dest/svg/' + size + '/*.svg'],
                dest: 'example/dest/png/' + size
            });

            gulp.src('example/src/*.svg')
                .pipe(svgscaler({ width: size}))
                .pipe(rename(function (path) {
                    pngFiles.push(size + '/' + path.basename + '.png');
                }))
                .pipe(gulp.dest('example/dest/svg/' + size))
                .on('end', function () {
                    cnt++;
                    if (cnt === size.length) {
                        done();

                        grunt.config('svg2png.all', {
                            files: svg2pngFiles
                        });
                        grunt.task.run('svg2png');

                        imagePreview(pngFiles)

                    }
                });
        });


    });

    grunt.registerTask('default', ['clean:dest', 'svg2pngs']);


    function imagePreview(pngFiles) {
        grunt.file.write('example/dest/preview.html', pngFiles.map(function (fileName) {
            return '<img src="png/' + fileName + '"/>';
        }).join(''))
    }

};

