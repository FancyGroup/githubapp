/**
 * Created by allen on 2016/10/6.
 */
const through = require('through2');
const pp = require('preprocess');
const gutil = require('gutil');

const PLUGIN_NAME = 'strip-module'

export default function stripModule(preprocessOpts?: any) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'gulpConfigs.ts: streaming is not supported'));
            return cb();
        }

        let content: string = pp.preprocess(file.contents.toString(), preprocessOpts || {});

        var split = `[function(require,module,exports){`;
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
