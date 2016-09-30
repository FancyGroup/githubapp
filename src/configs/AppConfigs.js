/**
 * Created by allen on 2016/9/29 0029.
 */
"use strict";
var AppConfigs = (function () {
    function AppConfigs() {
        this.globals = {
            hasLogin: false,
        };
    }
    AppConfigs.prototype.onLaunch = function () {
        console.log('WX Launch');
    };
    AppConfigs.prototype.onShow = function () {
        console.log('App Show');
    };
    AppConfigs.prototype.onHide = function () {
        console.log('App Hide');
    };
    return AppConfigs;
}());


module.exports = {default:AppConfigs};