/**
 * Created by allen on 2016/9/29 0029.
 */

export function login() {
    wx.login({
        success: ()=> {

        }
    });
}

export class PageConfigs<T> {
    /**更新同步数据 */
    setData: (obj: T)=>void;
}
