'use-strict';

const { src, dest, parallel, watch } = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function buildImg() {

    return src('src/assets/img/**/*')
        .pipe(imagemin())
        .pipe(dest('src/assets/img'));
}

function server() {

    browserSync.init({

        server: {
            baseDir: 'src'
        }
    });

    watch('src/**/*').on('change', browserSync.reload);
}

exports.buildImg = buildImg;
exports.server = server;
exports.default = parallel(server, buildImg);