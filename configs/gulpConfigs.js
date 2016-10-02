/**
 * Created by allen on 2016/9/29 0029.
 */
"use strict";
const through = require('through2');
const pp = require('preprocess');
const gutil = require('gutil');
const PLUGIN_NAME = `gulp-wx-ts2js`;
function append2Object(exportObject, str) {
    const result = str
        .replace(/(^exports.)|(;$)/g, ``)
        .split(/\s\=\s/);
    exportObject[result[0]] = result[1];
}
function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function object2String(obj) {
    return JSON.stringify(obj).replace(/\"/g, ``);
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
        const content = pp.preprocess(file.contents.toString(), preprocessOpts || {});
        let exportObject = {};
        const result = content
            .replace(/(require\(.*)(\.js|\.ts|\.json)?(['|"]\);$)/igm, `$1.js$3`)
            .replace('Object.defineProperty(exports, "__esModule", { value: true });', '')
            .replace(/\bexports\..*/igm, function (result) {
            append2Object(exportObject, result);
            return ``;
        });
        let exportString = ``;
        if (!isObjectEmpty(exportObject)) {
            exportString = `module.exports = ${object2String(exportObject)};`;
        }
        file.contents = new Buffer(result + exportString);
        this.push(file);
        return cb();
    });
}
module.exports = ts2js;
