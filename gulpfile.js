"use strict";
var ts2js = require('./configs/gulpConfigs');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
/**
 * Created by allen on 2016/9/29 0029.
 */
var wxTsConfig = require('./tsconfig.wx.json');
var tsProject = ts.createProject('tsconfig.wx.json');
gulp.task("wx:ts2js", function () {
    var tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js
        .pipe(ts2js())
        .pipe(gulp.dest(function (file) { return file.base; }));
});
gulp.task('watch', ['wx:ts2js'], function () {
    gulp.watch(wxTsConfig.include, ['wx:ts2js']);
});
gulp.task('default', ['watch']);
