/**
 * Created by allen on 2016/9/29 0029.
 */
"use strict";
class AppConfigs {
    constructor() {
        this.globals = {
            hasLogin: false,
        };
    }
    onLaunch() {
        console.log('WX Launch');
    }
    onShow() {
        console.log('App Show');
    }
    onHide() {
        console.log('App Hide');
    }
}


module.exports = {default:AppConfigs};