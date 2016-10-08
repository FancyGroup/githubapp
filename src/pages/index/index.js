"use strict";
const PageConfigs_1 = require('../../utils/PageConfigs.js');
class Index extends PageConfigs_1.default {
    constructor() {
        super();
        this.data = {
            motto: 'Hello Test',
            userInfo: {}
        };
    }
    bindViewTap() {
    }
    onLoad() {
        super.onLoad();
        var that = this;
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        that.setData({
                            userInfo: res.userInfo
                        });
                    }
                });
            }
        });
    }
}
Page(new Index());
