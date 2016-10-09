const wechat = {};

const noPromise = {
    some: true
};

function forEach(key) {
    if (noPromise[key] || key.substr(0, 2) == 'on' || /\w+Sync$/.test(key)) {
        if (wx[`__lookupGetter__`](key)) {
            wechat[`__defineGetter__`](key, function () {
                return wx[key];
            });
        } else {
            wechat[key] = wx;
        }
        return;
    }

    wechat[key] = function (obj) {
        obj = obj || {};
        return new Promise(function (resolve, reject) {
            obj.success = resolve;
            obj.fail = function (res) {
                if (res && res.errMsg) {
                    reject(new Error(res.errMsg))
                } else {
                    reject(res);
                }
            };
            wx[key](obj);
        });
    }
}

for (let key in wx) {
    forEach(key);
}
export default wechat;