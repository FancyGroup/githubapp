/**
 * Created by allen on 2016/9/29 0029.
 */
"use strict";
function login() {
    wx.login({
        success: function () {
        }
    });
}

module.exports = {login:login}