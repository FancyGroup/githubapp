import ts2js = require('./configs/gulpConfigs');
import * as gulp from 'gulp';
import stripModule from './configs/stripModule';
const ts = require('gulp-typescript');
const watch = require('gulp-watch');
const gulpSequence = require('gulp-sequence');
const autoCompileGulpTask = require('wx-compile-key').autoCompileGulpTask;
const sass = require('gulp-sass');
const extReplace = require('gulp-ext-replace');

/**
 * Created by allen on 2016/9/29 0029.
 */

const wxTsConfig = require('./tsconfig.wx.json');
const tsProject = ts.createProject('tsconfig.wx.json');
const browserify = require('gulp-browserify');
const SASS_SRC = 'src/**/*.scss';

gulp.task(`wx:ts2js`, ()=> {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js
        .pipe(ts2js())
        .pipe(gulp.dest((file)=>file.base));
});

gulp.task('wx:browserify', ()=> {
    return gulp.src("src/npm/index.js")
        .pipe(browserify())
        .pipe(stripModule())
        .pipe(gulp.dest((file)=>file.base));
});

gulp.task(`wx:autoCompile`, autoCompileGulpTask);

gulp.task('wx', (cb)=> {
    gulpSequence(`wx:ts2js`, `wx:browserify`)(cb)
});

gulp.task('sass', function () {
    return gulp.src(SASS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(extReplace('.wxss'))
        .pipe(gulp.dest((file)=>file.base));
});

gulp.task('watch', ()=> {
    gulp.watch(wxTsConfig.include, [`wx`, `wx:autoCompile`]);
    gulp.watch(SASS_SRC, [`sass`, `wx:autoCompile`]);
});

gulp.task('default', ['wx', 'watch']);