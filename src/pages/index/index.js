"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var public_1 = require("../../api/wx/public.js");
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        _super.call(this);
        this.data = {
            motto: 'Hello Test',
            userInfo: {}
        };
    }
    Index.prototype.bindViewTap = function () {
    };
    Index.prototype.onLoad = function () {
        var self = this;
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {
                        self.setData({
                            userInfo: res.userInfo
                        });
                    }
                });
            }
        });
    };
    return Index;
}(public_1.PageConfigs));
Page(new Index());
