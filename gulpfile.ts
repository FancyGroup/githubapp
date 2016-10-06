import ts2js = require('./configs/gulpConfigs');
import * as gulp from 'gulp';
import stripModule from './configs/stripModule';
const ts = require('gulp-typescript');
const watch = require('gulp-watch');
const gulpSequence = require('gulp-sequence');
const autoCompileGulpTask = require('wx-compile-key').autoCompileGulpTask;

/**
 * Created by allen on 2016/9/29 0029.
 */

const wxTsConfig = require('./tsconfig.wx.json');
const tsProject = ts.createProject('tsconfig.wx.json');
const browserify = require('gulp-browserify');

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
    gulpSequence(`wx:ts2js`, `wx:browserify`, `wx:autoCompile`)(cb)
});

gulp.task('watch', ()=> {
    gulp.watch(wxTsConfig.include, ['wx']);
});

gulp.task('default', ['wx', 'watch']);