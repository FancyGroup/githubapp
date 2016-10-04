type MethodType = 'GET' | 'POST';

function request(url:string, method:MethodType, data:Object) {
    return new Promise((resolve, reject)=> {
        wx.request({
            url,
            data,
            method,
            header: {
                'Content-Type': 'application/json'
            },
            success: (res)=> {
                resolve(res);
            },
            fail: (err)=> {
                reject(err);
            }
        })
    });
}