import * as fs from 'fs';
import * as path from 'path';
import wxChmod from "./wxChmod";
const shortcutPath = path.resolve(require(`../package.json`).wxtools.path, `package.nw/app/dist/common/shortCut/shortCut.js`);
const appendScriptStr = `
    nw.App.registerGlobalHotKey(new nw.Shortcut({
        key: "Ctrl+Shift+Alt+F10", active: function () {
            require("../actions/actions.js").reBuild()
        }
    }));
`;


function isAppendScriptExists(content:string) {
    return content.indexOf(appendScriptStr) > -1;
}

function hasAppendedPromise() {
    return new Promise((resolve, reject)=> {
        fs.readFile(shortcutPath, (err:NodeJS.ErrnoException, data:Buffer)=> {
            if (err) {
                reject(err);
                return;
            }
            const content = data.toString();
            resolve(isAppendScriptExists(content));
        })
    });
}

function appendScript() {
    return new Promise((resolve, reject)=> {
        fs.appendFile(shortcutPath, appendScriptStr, (err:NodeJS.ErrnoException)=> {
            err ? resolve() : reject(err);
        })
    });
}

// 修改微信开发工具，让编译代码快捷键暴露到全局
export async function exposeCompileShortcut() {
    const hasAppended = await hasAppendedPromise();
    if (!hasAppended) {
        appendScript();
    }
}

wxChmod(shortcutPath);
exposeCompileShortcut();