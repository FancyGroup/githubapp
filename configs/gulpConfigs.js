/**
 * Created by allen on 2016/9/29 0029.
 */
"use strict";
var through = require('through2');
var pp = require('preprocess');
var gutil = require('gutil');
var PLUGIN_NAME = "gulp-wx-ts2js";
function append2Object(exportObject, str) {
    var result = str
        .replace(/(^exports.)|(;$)/g, "")
        .split(/\s\=\s/);
    exportObject[result[0]] = result[1];
}
function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function object2String(obj) {
    return JSON.stringify(obj).replace(/\"/g, "");
}
function ts2js(preprocessOpts) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }
        if (file.isStream()) {
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'gulpConfigs.ts: streaming is not supported'));
            return cb();
        }
        var content = pp.preprocess(file.contents.toString(), preprocessOpts || {});
        var exportObject = {};
        var result = content
            .replace('Object.defineProperty(exports, "__esModule", { value: true });', '')
            .replace(/\bexports\..*/igm, function (result) {
            append2Object(exportObject, result);
            return "";
        });
        var exportString = "";
        if (!isObjectEmpty(exportObject)) {
            exportString = "module.exports = " + object2String(exportObject) + ";";
        }
        file.contents = new Buffer(result + exportString);
        this.push(file);
        return cb();
    });
}
module.exports = ts2js;
