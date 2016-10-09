"use strict";
/**
 * Created by allen on 2016/10/6.
 */
var through = require('through2');
var pp = require('preprocess');
var gutil = require('gutil');
var PLUGIN_NAME = 'strip-module';
function stripModule(preprocessOpts) {
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
        var split = "[function(require,module,exports){";
        var i = content.lastIndexOf('[function(require,module,exports){');
        //         content.replace(/function\(require,module,exports\)\{\n\"use strict\"/gm,`[function(require){
        // "use strict"`)
        if (i != -1) {
            content = content.substr(0, i) + '[function(require){' + content.substr(i + split.length);
        }
        file.contents = new Buffer(content);
        this.push(file);
        return cb();
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stripModule;
