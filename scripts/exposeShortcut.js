"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const fs = require('fs');
const path = require('path');
const wxChmod_1 = require("./wxChmod");
const shortcutPath = path.resolve(require(`../package.json`).wxtools.path, `package.nw/app/dist/common/shortCut/shortCut.js`);
const appendScriptStr = `
    nw.App.registerGlobalHotKey(new nw.Shortcut({
        key: "Ctrl+Shift+Alt+F10", active: function () {
            require("../actions/actions.js").reBuild()
        }
    }));
`;
function isAppendScriptExists(content) {
    return content.indexOf(appendScriptStr) > -1;
}
function hasAppendedPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile(shortcutPath, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const content = data.toString();
            resolve(isAppendScriptExists(content));
        });
    });
}
function appendScript() {
    return new Promise((resolve, reject) => {
        fs.appendFile(shortcutPath, appendScriptStr, (err) => {
            err ? resolve() : reject(err);
        });
    });
}
// 修改微信开发工具，让编译代码快捷键暴露到全局
function exposeCompileShortcut() {
    return __awaiter(this, void 0, void 0, function* () {
        const hasAppended = yield hasAppendedPromise();
        if (!hasAppended) {
            appendScript();
        }
    });
}
exports.exposeCompileShortcut = exposeCompileShortcut;
wxChmod_1.default(shortcutPath);
exposeCompileShortcut();
