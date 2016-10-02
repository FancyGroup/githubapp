"use strict";
const chmod = require('chmod');
function wxChmod(path) {
    chmod(path, 777);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = wxChmod;
