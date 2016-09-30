import ts2js = require('./configs/gulpConfigs');
import * as gulp from 'gulp';
const ts = require('gulp-typescript');
const watch = require('gulp-watch');

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

gulp.task('watch', ['wx:ts2js'], ()=> {
    gulp.watch(wxTsConfig.include, ['wx:ts2js']);
});

gulp.task('default', ['watch']);