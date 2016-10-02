import ts2js = require('./configs/gulpConfigs');
import * as gulp from 'gulp';
import autoCompileWX from "./configs/gulpAutoCompileWX";
const ts = require('gulp-typescript');
const watch = require('gulp-watch');
const gulpSequence = require('gulp-sequence');

/**
 * Created by allen on 2016/9/29 0029.
 */

const wxTsConfig = require('./tsconfig.wx.json');
const tsProject = ts.createProject('tsconfig.wx.json');


gulp.task(`wx:ts2js`, ()=> {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js
        .pipe(ts2js())
        .pipe(gulp.dest((file)=>file.base));
});

gulp.task(`wx:autoCompile`, (cb) => {
    autoCompileWX();
    cb();
});

gulp.task('wx', (cb)=> {
    gulpSequence(`wx:ts2js`, `wx:autoCompile`)(cb)
});

gulp.task('watch', ['wx'], ()=> {
    gulp.watch(wxTsConfig.include, ['wx']);
});

gulp.task('default', ['watch']);