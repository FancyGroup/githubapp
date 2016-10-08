"use strict";
var ts2js = require('./configs/gulpConfigs');
var gulp = require('gulp');
var stripModule_1 = require('./configs/stripModule');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var gulpSequence = require('gulp-sequence');
var autoCompileGulpTask = require('wx-compile-key').autoCompileGulpTask;
var sass = require('gulp-sass');
var extReplace = require('gulp-ext-replace');
/**
 * Created by allen on 2016/9/29 0029.
 */
var wxTsConfig = require('./tsconfig.wx.json');
var tsProject = ts.createProject('tsconfig.wx.json');
var browserify = require('gulp-browserify');
var SASS_SRC = 'src/**/*.scss';
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
    gulpSequence("wx:ts2js", "wx:browserify")(cb);
});
gulp.task('sass', function () {
    return gulp.src(SASS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(extReplace('.wxss'))
        .pipe(gulp.dest(function (file) { return file.base; }));
});
gulp.task('watch', function () {
    gulp.watch(wxTsConfig.include, ["wx", "wx:autoCompile"]);
    gulp.watch(SASS_SRC, ["sass", "wx:autoCompile"]);
});
gulp.task('default', ['wx', 'watch']);
