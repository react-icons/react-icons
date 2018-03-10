## SVG Scaler

[![Build Status](https://travis-ci.org/morlay/svg-scaler.svg?branch=master)](https://travis-ci.org/morlay/svg-scaler)
[![Dependencies](https://david-dm.org/morlay/svg-scaler.png)](https://david-dm.org/morlay/svg-scaler)

Scale svg size；

## Usage

`npm install svg-scaler`

ands

     var svgscaler = require('svg-scaler');

     gulp.src('src/*.svg')
         .pipe(svgscaler({ width: number })) // options
         .pipe(gulp.dest('./dest/svg/'))

## options

### `noSvgo`

`type:boolean`, default is `false`, if you want remain more detail, please set it `true`;

### `width`

`type:number`, will make the svg scale to the size by the number, will fix to square, unity all svg files to same size.

### scale

`type:number`, just normal `scale`, but if have the width or the height option, the `scale` will not work.

## Warning

* not support image in svg.
* because use phantom, so need some special configuration. please see the `Gruntfile`, same for gulp.

## Thanks

* https://github.com/fontello/svgpath
* https://github.com/isaacs/sax-js
* https://github.com/svg/svgo

* Test icons from https://dribbble.com/shots/1511236-Champicons-icons-of-champions-FREE-AI