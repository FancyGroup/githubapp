"use strict";
var ts2js = require('./configs/gulpConfigs');
var gulp = require('gulp');
var stripModule_1 = require('./configs/stripModule');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var gulpSequence = require('gulp-sequence');
var autoCompileGulpTask = require('wx-compile-key').autoCompileGulpTask;
/**
 * Created by allen on 2016/9/29 0029.
 */
var wxTsConfig = require('./tsconfig.wx.json');
var tsProject = ts.createProject('tsconfig.wx.json');
var browserify = require('gulp-browserify');
gulp.task("wx:ts2js", function () {
    var tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js
        .pipe(ts2js())
        .pipe(gulp.dest(function (file) { return file.base; }));
});
gulp.task('wx:browserify', function () {
    return gulp.src("src/npm/index.js")
        .pipe(browserify())
        .pipe(stripModule_1.default())
        .pipe(gulp.dest(function (file) { return file.base; }));
});
gulp.task("wx:autoCompile", autoCompileGulpTask);
gulp.task('wx', function (cb) {
    gulpSequence("wx:ts2js", "wx:browserify", "wx:autoCompile")(cb);
});
gulp.task('watch', function () {
    gulp.watch(wxTsConfig.include, ['wx']);
});
gulp.task('default', ['wx', 'watch']);
